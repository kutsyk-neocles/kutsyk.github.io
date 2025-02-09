---
layout: post
title: IoTHub, Blob Storage and Function App. Configuring Cold and Hot path of data processing.
comments: true
tags: azure iothub storage blob function workflow
excerpt_separator: <!--more-->
---

In this article I will tell you how to build efficient and working workflow of the same data from IoTHub into Function App and Blob storage.
[Read in Medium] (https://medium.com/@VKutsyk/iothub-blob-storage-and-function-app-configuring-cold-and-hot-path-of-data-processing-3a5bfb43ca90)

![Archi](https://docs.microsoft.com/en-us/azure/iot-hub/media/iot-hub-store-data-in-azure-table-storage/1_route-to-storage.png)
<!--more-->

## IoTHub
---
To create IotHub check official docs - [create IotHub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal)

## Device Emulators
---
How to create Device Emulator check official docs - [create device emulators for IoTHub](https://docs.microsoft.com/en-us/azure/iot-hub/quickstart-send-telemetry-node)

## Blob storage
---
To create Blob storage check official docs - [create storage](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account)

## Function App Service Plan
---
To create function app service itself check official docs - [create function app](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-azure-function)

### Configuring Function App
---
After creating App Service Plan for Function App we have to create proper type of our function itself. We have to choose right trigger for it.

Choose create new function with EventHub trigger:
![](https://github.com/kutsyk/kutsyk.github.io/blob/master/images/azure_iot_function_blob/function_type.PNG?raw=true)

Run the function as it is to open log streaming and see what is going on.

__Logs:__

{% highlight bash %}
> 2018-06-18T19:06:43  Welcome, you are now connected to log-streaming service.
> 2018-06-18T19:07:04.568 [Info] Function started (Id=a60af5f3-ad37-4a45-a450-2c3ac89fca81)
> 2018-06-18T19:07:04.583 [Info] C# Event Hub trigger function processed a message: Test Message
> 2018-06-18T19:07:04.583 [Info] Function completed (Success, Id=a60af5f3-ad37-4a45-a450-2c3ac89fca81, Duration=11ms)
{% endhighlight %}

Run your Device Emulator to check if messages are received via Function App.

__Logs:__

{% highlight bash %}
> 2018-06-18T19:06:43  Welcome, you are now connected to log-streaming service.
> 2018-06-18T19:07:04.568 [Info] Function started (Id=a60af5f3-ad37-4a45-a450-2c3ac89fca81)
> 2018-06-18T19:07:04.583 [Info] C# Event Hub trigger function processed a message: Test Message
> 2018-06-18T19:07:04.583 [Info] Function completed (Success, Id=a60af5f3-ad37-4a45-a450-2c3ac89fca81, Duration=11ms)
> 2018-06-18T19:08:43  No new trace in the past 1 min(s).
> 2018-06-18T19:09:43  No new trace in the past 2 min(s).
> 2018-06-18T19:09:56.815 [Info] Function started (Id=2d9db652-62e6-4ab9-a9a5-ddf8be7d23e4)
> 2018-06-18T19:09:56.815 [Info] C# Event Hub trigger function processed a message: {"deviceId":"AAABBB","time":1529348996,"seqNumber":1,"data":"3015001E0004186DEA983F80","snr":0,"station":"","rssi":0,"ack":false}
> 2018-06-18T19:09:56.815 [Info] Function completed (Success, Id=2d9db652-62e6-4ab9-a9a5-ddf8be7d23e4, Duration=0ms)
> 2018-06-18T19:09:57.862 [Info] Function started
{% endhighlight %}

Nice, we are receiving messages into our IotHub and from IotHub they are delivered into Function App

## Configuring Route and Endpoint for `Cold` and `Hot` path
---

#### Endpoint
Go to your IoTHub and add new Custom Endpoint. Even in Free plan in IoTHub you are able to create one additional custom endpoint, what is enough for our case.

![](https://docs.microsoft.com/en-us/azure/iot-hub/media/iot-hub-store-data-in-azure-table-storage/2_custom-storage-endpoint.png)

#### Routes
After add two new Routes.

First to send data into Blob storage.
![](https://docs.microsoft.com/en-us/azure/iot-hub/media/iot-hub-store-data-in-azure-table-storage/3_create-route.png)

Second to send data into events endpoint, to which is connected our function app trigger.

![](https://github.com/kutsyk/kutsyk.github.io/blob/master/images/azure_iot_function_blob/iothub_route_function.PNG?raw=true)

Rules for Routes should be the same.After restart your Device Emulators.

You should see your message ariving in your Function app logs and after `Batch frequency` seconds, you should have file created in your Blob storage.

### Attention. Files in Blob Storage are saved in serialized format - [AVRO](https://avro.apache.org/). So when you will access file you will see not human readable data.


{% if page.comments %} 
<div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://kutsyk.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<script id="dsq-count-scr" src="//kutsyk.disqus.com/count.js" async></script>    
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                            
{% endif %}

<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://google.com/article"
  },
  "headline": "IoTHub, Blob Storage and Function App. Configuring Cold and Hot path of data processing.",
  "image": [
    "https://docs.microsoft.com/en-us/azure/iot-hub/media/iot-hub-store-data-in-azure-table-storage/1_route-to-storage.png",
   ],
  "datePublished": "2018-03-29T08:00:00+08:00",
  "dateModified": "2018-03-29T09:20:00+08:00",
  "author": {
    "@type": "Person",
    "name": "Vasyl Kutsyk"
  },
   "publisher": {
    "@type": "Organization",
    "name": "Kutsyk",
    "logo": {
      "@type": "ImageObject",
      "url": "https://kutsyk.github.io/images/main_photo.jpg"
    }
  },
  "description": "In this article I will tell you how to build efficient and working workflow of the same data from IoTHub into Function App and Blob storage"
}
</script>

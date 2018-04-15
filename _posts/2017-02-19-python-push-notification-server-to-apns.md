---
title:  "Python push notification server to APNS"
description: "Setting up a server, key and certificate to get a iOS push notification service."
date: 2017-02-19T19:34:47.396Z
categories: python backend
tags: python apns code solution
---

Ladies and gentlemen, I'm opening the blog and the first post is about a problem I passed a few weeks ago. If you are passing through a similar problem I hope it can help you somehow.

So, I was struggling against APNS to get a push notification working through a APNS server written in Python. Previously the notification server (Android and iOS) was written in PHP and the back-end in Python, I needed to break off that little dependency.

To make the things easier (I barely had options :P) I decided to use [PyAPNs](https://github.com/djacobs/PyAPNs) for iOS push notifications, a Python package for interact with APNS.

## Usage

The logic is pretty simple, the package's classes do all the job and with a few lines you can set up a server running, _theoretically_...

{% highlight python%}
from apns import APNs, Payload

apns = APNs(cert_file='cert.pem', key_file='key.pem')

token = 'b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b87'
payload = Payload(alert="Hello World!", sound="default", badge=1)
apns.gateway_server.send_notification(token, payload)
{% endhighlight %}

> Note: using version 2.0.1 I've had to use `enhanced=True` to make things work.

## The real problem

With just that little piece of code I couldn't make things work, my real problem was the validity of `cert_file` and `key_file`. They have to be precise and I tested a dozen of combinations to get the one I needed. Without success.

## The whole key/certificate solution

To generate both files needed to send a push notification using PyAPNs, we need to perform a bunch of steps:

1. The first thing you need is a `.csr` file (on Keychain Access you can generate one);
2. In the Apple Developer website, navigate to Certificates section and click in the **+** button to create one;
3. Select **Apple Push Notification service SSL (Production)**, with this one you are able to use the production service and sandbox;
4. Select the App ID;
5. Upload your `.csr` file;
6. Finish the registration, download the `.cer` file then double click to install the certificate into Keychain Access;
7. Open Keychain Access, in the sidebar select both **login** and **My Certificates** filters;
8. Look for the certificate you just installed, it should start with "Apple Production IOS Push Services:" followed by your app's bundle ID and export both (certificate and private key) as a `.p12` file, no need a password.
9. Run `openssl x509 -in /path/to/aps_certificate.cer -inform der -out cert_file.pem` to convert the certificate in a `.pem` file.
10. Last but not least, run `openssl pkcs12 -in /path/to/generated.p12 -out key_file.pem -nodes -clcerts` to generate the `key_file.pem`, the last one you will need.

With all this done, you should be able to send push notifications to your app using the PyAPNs package.

### References

* [Generate PEM file used to setup APNS](http://stackoverflow.com/questions/21250510/generate-pem-file-used-to-setup-apple-push-notification)
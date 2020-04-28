---
title: "How to track specific pages in Google Analytics Dashboard"
date: "2018-09-07"
excerpt: "A quick regex guide that covers the most common use-case for the non-programmer."
featuredImage: ../images/regex.png
---

So you want to track specific pages from your website on a Google Analytics dashboard? My wife was recently in this position, but couldn't find any easy instructions online. So I'm putting these here in case it can help others.

In order to do this, you have to use Regex, a collection of weird characters that define a search pattern. You can get in over your head pretty quickly with this stuff if you aren't a programmer.

In this example, we'll look at pageviews, but it could be any metric. You'll end up with a widget that displays this on your dashboard:

| Pages | Pageviews |
|-------|-----------|
|/my-favorite-article|900|
|/another/worth-tracking|800|
|/this/one/too|700|

First, go to your GA dashboard and add a new widget. Select Table. Under Display the following columns, select Page. For the metric choose Pageviews. Select the number of rows. Under Filter this data, select: Only show / Page / Regular Expression / and in the final field we'll paste the code we'll create below. 

The code will have the following format: Everything will be in parentheses ```()```. Each page name will start with a ```^```, end with a ```$```, and must be keep it's leading slash ```/``` or it won't work. Place an ```or``` operator between each 'pattern,' which is ```|```. ***Make sure not use use any spaces or it will not work.*** So if the three pages you want to track on your site are:

```
/my-favorite-article 
/another/worth-tracking
/this/one/too
```

Use this format and paste it into the field: 

```regex
(^/my-favorite-article$|^/another/worth-tracking$|^/this/one/too$)
```

Analytics has a field on each of its widgets for filtering with Regex, so you can use this for much more than just tracking specific pages on a dashboard. For example, you can copy the Regex code into the search bar on All Pages and it will bring up stats for those three pages. 

Good luck! 
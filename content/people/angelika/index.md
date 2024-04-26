---
type: blog
title: "Angelika"
description: Core Facility Leader
date: 2023-10-10T22:44:37+08:00
draft: false
series:
  - Tutorials
categories:
tags:
images:
  - Angelika.JPG
authors:
  - HB
aliases:
  - /2023/10/replace-meta-modules

menu:
  main:
    parent: people
---

## Backgrounds

Initially, to make it easier for newbies to get started and familiarize themselves with the themes of the HB framework, we provide a number of [meta modules], which are just collections of modules that don't provide any functionalities.

However, meta modules have an obvious disadvantage that it is difficult to remove unwanted modules from them, so in this tutorial, we're going to talk about how to replace the meta module.

## Solution

To do this, we need to know which modules the meta-module has imported, then reimport the imported modules _in order_, remove the unwanted modules, and finally remove the meta module.

{{< bs/alert danger >}}
The order of imported modules is very important, which priority is from the top to bottom, if you're not familiar with this, just keep the same order as same as defined of the meta module.
{{< /bs/alert >}}

Let's say the site imports the [github.com/hbstack/meta/recommended](https://github.com/hbstack/meta/blob/main/recommended/hugo.toml) meta module.

```toml
[[module.imports]]
path = "github.com/hbstack/meta/recommended"
```

First of all, replace the meta module with the modules imported by it _in order_.

And then remove or replace the unwanted modules, for example, you might want to replace the `github.com/hbstack/header/modules/search` with `github.com/hbstack/header/modules/docsearch` for your open source project documentation site.

{{< bs/alert >}}
For other configurations written in YAML or JSON, you'll need to convert it to corresponding languages first.
{{< /bs/alert >}}
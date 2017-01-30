---
layout:     post
title:      " T I T L E "
subtitle:   " S U B T I T L E ."
date:       2014-09-21 12:00:00
author:     "Jordy Cuan"
header-img: "img/post-bg-04.jpg"

code_syntax: True

# Pruebas
#category: articles
tags: []
---

<p></p>

<p></p>

<p></p>

<h2 class="section-heading">Lorem ipsum dolor sit amet</h2>

<p></p>

<p></p>

<blockquote>Lorem ipsum dolor sit amet.</blockquote>

<p></p>

<h2 class="section-heading">Lorem ipsum dolor sit amet</h2>

<p></p>

<img src="{{ site.baseurl }}/img/post-sample-image.jpg" alt="Image">

<span class="caption text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>

<p></p>

<p></p>


{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}


<pre class="brush: python">
import copy, numpy as np
np.random.seed(0)

# compute sigmoid nonlinearity
def sigmoid(x):
    output = 1/(1+np.exp(-x))
    return output

# convert output of sigmoid function to its derivative
def sigmoid_output_to_derivative(output):
    return output*(1-output)


# training dataset generation
int2binary = {}
binary_dim = 8
</pre>


<p></p>

<p></p>

<p></p>

<p></p>

<p></p>

<p></p>

<p></p>

---
layout:     post
title:      "Hill and Gradient Descent"
subtitle:   "Introducción a descenso de colina y gradiante para machine learning."
date:       2017-07-21 12:00:00
author:     "Jordy Cuan"
header-img: "img/post-bg-04.jpg"

code_syntax: True

# Pruebas
#category: articles
tags: []
---

Más que nada este artículo lo escribo porque mucha gente se preguntará ¿Qué es el descenso de colina? ¿Cómo implementar el descenso de gradiante? o cosas por el estilo. En este post trataré de explicar matemáticamente que son y para que se usan. Comenzaré diciendo que son algoritmos enfocados a la optimización pero eso ya deberían saberlo, sino no estarían aquí.


--Recapitulando unos conceptos de geometría.

Primero que nada debemos recordar qué es una función "cóncava" y una "convexa". Una función es cóncava cuando podemos tomar dos puntos cualesquiera en el dominio de la función y al unir estos puntos por una recta, esta SIEMPRE quedará por debajo de la curva. La siguiente imagen ayuda mejor a entender esta definición. Recuerda, si siempre queda por debajo de la curva entonces es cóncava.

IMAG - CONCAVA

De modo similar, una función será convexa siempre que al unir dos puntos en el dominio de esta, el segmento que los une queda por encima de la curva.

IMAG - CONVEX

Existen otras funciones que no son ni cóncavas ni convexas como la siguiente, donde si tomamos dos puntos del dominio y trazamos una línea recta, esta pasa tanto por encima como por debajo de la gráfica.



--Buscando máximos o mínimos analíticamente

En algún momento de este algoritmo vamos a querer buscar el punto x donde f(x) tenga el menor o mayor valor posible, y bueno, para nosotros es fácil encontrarlo si tenemos a la vista la gráfica, pero ¿Cómo encontramos estos valores matemáticamente?



¡¡¡Punto de inflexión!!!


----Derivada

Pues adivinaste, es mediante el uso de Derivadas. Daré por hecho que como buen alumno autodidacta buscaste algo para refrescar tu memoria. Así que vamos a algo más práctico. 

Supongamos que tenemos la siguiente función 
g(x)=5-(x-10)^2
si observamos su comportamiento al graficarla podemos ver que es cóncava y que su punto máximo, que es 5, es alcanzado cuando x vale 10.

GRAFICA

Pero sin ver la gráfica, si derivamos la función (tóma un papel y lápiz y hazlo, sirve mucho) tenemos que g'(x)=-2x+20 y si igualamos a 0 para conseguir el valor de x, este vale 10 que es el punto donde g(x) alcanza su máximo. Si quieres hacer experimentos con gráficas te recomiendo esta página https://www.desmos.com/calculator.

Ahora bien, explicando un poco más lo anterior, el valor de x=10 es nuestro punto de inflexión ya que en este punto g'(x) no es ni positivo ni negativo. Si tomamos otro valor de x, antes de x=10, g'(x) será siempre positivo y, de modo contrario, si tomamos un valor para x que sea mayor a 10, este siempre será negativo.

A la forma que usamos para hallar este punto de x=10 podemos encontrarlo como Fitted Model. Pero siempre hay formas distintas de hacerlo.


Derivamos... e igualamos a 0... Esto es algo que luego lo podemos encontrar como Fitted Model... Y la otra manera de hacerlo es por medio de los descensos


--Ascenso o descenso de colina para encontrar maximos o mínimos


--Multiples dimensiones y Gradiantes


convert text expression to math expression online
http://www.hostmath.com/
https://d3c33hcgiwev3.cloudfront.net/_ded8cf419db4bf0c7c3c6457f42ac4a4_week1_simpleregression-annotated.pdf?Expires=1500681600&Signature=TPIzFBC8AICPtfwz3eWSJju5Xaa4DSnOoM6v0muIrFeUMG~JDWEON10nudWnMqKwPAOGGyB7UAumQ1gG6R3fQYy7S-Y5b8QnDELs855xjv9eOHFv--c15p7N3wsi7nGiG8qRtDWLH0f1R7tFTYcisEp-SbV3aSicrBnyc-yuwPg_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A


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

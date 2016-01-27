---
layout: post
title: "Indexado"
subtitle:   "because they lacked opposable thumbs and the brainpower to build a space program."
# date:       2014-06-10 12:00:00
header-img: "img/post-bg-02.jpg"
author:     "Jordy Cuan"

tags: [python, intro]
---


Lógica booleana

<p>Es una lógica que se emplea (ya casi no, se sigue empleando aunque sólo para consultas muy avanzadas) al momento de buscar información dentro de los textos a pesar de ya ir en desuso dado las nuevas técnicas de recuperación de información como indexados.
</p>
Grep

<p>Grep es un programa de Unix que se ejecuta desde la línea de comandos el cual nos permite introducir una línea o expresión regular, leer una lista de archivos e imprimir las líneas que hayan coincidido con nuestra búsqueda. 
</p>

Técnica de matrices de incidencia

<p>Las matrices de incidencia son tablas las cuales relacionan  un documento con una palabra, y cada celda toma el valor de un cero o un uno, con esto sabemos si una palabra se encuentra presente en el archivo y nos permite realizar la consulta de lógica booleana con una mayor velocidad, el único inconveniente es que para cada palabra que no existe dentro del documento, se emplea un entero en memoria y produce un mal gaste de la memoria.
</p>

<table>
  <tr>
    <th></th>
    <th>Nombre</th>
    <th>Navidad</th>
    <th>Empleado</th>
  </tr>
  <tr>
    <td>Presentación.txt</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Contrato de trabajador.txt</td>
    <td>1</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Carta navideña.txt</td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
  </tr>
</table>


¿Qué tan buenos son los documentos devueltos?

<p>Hay dos maneras de medir la efectividad de un buscador:
</p>Precisión: Fracción de los documentos recibidos que tienen información relevante al usuario
Recall: Fracción de los documentos relevantes en la colección que son devueltos

Las dos mediciones no suelen ser muy efectivas en cierto modo, así que podemos usar una más equilibrada que media entre ambas soluciones anteriores:

F measure = 0.5 PRP + R 




Índices Invertidos

<p>En esta técnica, se tiene que decir en qué documento se encuentra cada término, para ello se define un diccionario el cual contiene todas las palabras encontradas dentro de cada documento y cada palabra tiene asociada una lista donde están almacenadas las referencias de cada documento donde haya aparecido esta palabra. A cada referencia de documento donde se haya dicha palabra se le llama posting, y a al arreglo donde están todos los documentos enlistados se le llama postings.
</p>

Metodología para Indexar documentos:

Para llevar a cabo la indexación de documentos, se llevan a cabo los siguientes pasos

<p>En primer lugar tenemos que agrupar los documentos que procesaremos con el algoritmo.
</p>Tokenizar el texto de los documentos, preprocesar el contenido.
<p>Normalizar los resultados arrojados, como por ejemplo, si nos llegamos a encontrar la palabra ‘amigos’, almacenarla como ‘amigo’, con esto evitaremos tener que almacenar elementos con el mismo lemma.
</p>
<p>Indexar, hacer el diccionario de listas. Para este paso, se extraen todas las palabras de cada documento, si la palabra aún no se encuentra dentro del diccionario, se añade como llave de nuestra tabla hash y como valor se le asigna una lista conteniendo un elemento que es el archivo donde se encontró. Si la palabra ya se encuentra dentro del diccionario, se toma el documento donde se encontró y este es aprendizado a la lista de dicha palabra. Así hasta haber recorrido todos los documentos.
</p>
<p>Para hacer una consulta donde aparezca una palabra, lo único que se debe hacer es acceder al diccionario (tabla hash) y traer de vuelta la lista (postings), con ello sabremos que en esos documentos contienen la petición. Si se desean manejar consultas de dos o más elementos se debe de traer todos los postings de cada palabra y aplicarles un poco de teoría de conjuntos, ya sea intersección (and), union (or), resta, or exclusivo, etc según se desee.
</p>

Prácticas realizadas

Indexado de documentos locales

<p>En este programa se aplican los puntos descritos en el algoritmo de la sección anterior. La implementación está hecha en python 2.7 bajo el sistema operativo de Mac OS X. Es un pequeño script que indexa cierto número de bibliografías recorriendo un árbol de direcciones dentro de una dirección dada de la cual se extraen todos los nombres de los ficheros en una lista que se emplea dentro del ciclo que indexa estos documentos para conseguir el diccionario. Al finalizar, se pide al usuario introducir una consulta, si la consulta tiene una longitud de un elemento entonces se imprimen los postings, si tiene una longitud mayor, se procesan todos los postings de los elementos con un poco de lógica de conjuntos.
</p>
---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: Welcome to Slidev
mdc: true
---

## [Input Perturbation](https://icml.cc/virtual/2023/poster/23960)
# [Reduces Exposure Bias](https://icml.cc/virtual/2023/poster/23960)
## [in Diffusion Models](https://icml.cc/virtual/2023/poster/23960)

Mang Ning$^{1\,2}$, Enver Sangineto$^2$, Angelo Porrello$^2$, Simone Calderara$^2$, Rita Cucchiara$^2$

$^1$Department of Information and Computing Science, Utrecht University, the Netherlands.<br/>
$^2$Department of Engineering (DIEF), University of Modena and Reggio Emilia, Italy.

## ICML 2023

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/toonnyy8-notes/Input-Perturbation-Reduces-Exposure-Bias-in-Diffusion-Models" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

# Exposure Bias

<span></span>

Exposure bias, also known as the **Teacher Forcing Problem**, is a common issue in training autoregressive models.
This issue occurs when there is a **Mismatch between how the model is Trained and how it is used during Generation**.

The problem arises because the model may not perform as well during inference as it did during training. It can make mistakes that accumulate over time, especially when generating longer sequences. These errors can result from slight inaccuracies in earlier predictions, leading to a divergence from the true sequence.

<img class="m-auto w-3/5" src="/imgs/exposure_bias.png" />

<SlideCurrentNo class="absolute bottom-4 right-8" />

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---
layout: default
---

# Exposure Bias in DPM

<SlideCurrentNo class="absolute bottom-4 right-8" />

---

# DDPM-IP

<img class="m-auto w-4/5" src="/imgs/DDPMy.png" />

<SlideCurrentNo class="absolute bottom-4 right-8" />

---

# DDPM-IP

<div class="grid grid-cols-2">

<div class="mx-auto">
<table>
<thead>
<tr>
<th>DDPM Standard Training</th>
</tr>
</thead>
<tbody>
<tr>
<td class="text-base">

$$\begin{aligned}
&\textbf{repeat}\\
&\;\;\;\;\mathbf{x}_0\sim q(\mathbf{x}_0),t\sim\mathbb{U}(\{1,\ldots,T\}),\mathbf{\epsilon}\sim\mathcal{N}(\mathbf{0},\mathbf{I})\\
\\
&\;\;\;\;\mathbf{x}_t=\sqrt{\bar{\alpha}_t}\mathbf{x}_0+\sqrt{1-\bar{\alpha}_t}\epsilon\\
&\;\;\;\;\text{update }\theta\text{ by } \nabla_\theta{\Vert\epsilon-\epsilon_\theta(\mathbf{x}_t,t)\Vert}^2\\
&\textbf{until}\text{ converged}
\end{aligned}$$
</td>
</tr>
</tbody>
</table>
</div>

<div class="mx-auto">
<table>
<thead>
<tr>
<th>DDPM-IP: Training with input perturbation</th>
</tr>
</thead>
<tbody>
<tr>
<td class="text-base">

$$\begin{aligned}
&\textbf{repeat}\\
&\;\;\;\;\mathbf{x}_0\sim q(\mathbf{x}_0),t\sim\mathbb{U}(\{1,\ldots,T\}),\mathbf{\epsilon}\sim\mathcal{N}(\mathbf{0},\mathbf{I})\\
&\;\;\;\;\color{#a3a} \mathbf{\xi}\sim\mathcal{N}(\mathbf{0},\mathbf{I})\\
&\;\;\;\;\textcolor{#a3a}{\mathbf{y}_t}=\sqrt{\bar{\alpha}_t}\mathbf{x}_0+\sqrt{1-\bar{\alpha}_t}(\epsilon+\textcolor{#a3a}{\gamma_t\xi})\\
&\;\;\;\;\text{update }\theta\text{ by } \nabla_\theta{\Vert\epsilon-\epsilon_\theta(\textcolor{#a3a}{\mathbf{y}_t},t)\Vert}^2\\
&\textbf{until}\text{ converged}
\end{aligned}$$
</td>
</tr>
</tbody>
</table>
</div>

</div>

<SlideCurrentNo class="absolute bottom-4 right-8" />

---

# Comparison of Explicit Lipshitz Continuous Methods


---

<div class="grid grid-cols-2">
<div>
<img class="m-auto h-300px" src="/imgs/fig3/imagenet.png" />
<p class="text-center text-2xl">

ImageNet $32\times 32$
</p>
</div>
<div>
<img class="m-auto h-300px" src="/imgs/fig3/ffhq.png" />

<p class="text-center text-2xl">

FFHQ $128\times 128$
</p>
</div>
</div>

<SlideCurrentNo class="absolute bottom-4 right-8" />

---

# Conclusion

本篇研究提出了一個簡單的方法解決在 DPM 中的 Exposure Bias

將 Bias 假設為 Gaussian Distribution 其實並不合理，而且保留 bias 的 DDPM-IP 比去除 bias 的 DDPM-y 更好，

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
download: true
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

# Exposure Bias

<span></span>

<p class="text-xl text-justify">

Exposure bias, also known as the **Teacher Forcing Problem**, is a common issue in training autoregressive models.
This issue occurs when there is a **Mismatch between how the model is Trained and how it is used during Generation**.

The problem arises because the model may not perform as well during inference as it did during training. It can make mistakes that accumulate over time, especially when generating longer sequences. These errors can result from slight inaccuracies in earlier predictions, leading to a divergence from the true sequence.

</p>

<img v-click class="m-auto w-3/5" src="/imgs/exposure_bias.png" />

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

# Exposure Bias in DPM

<span></span>

<p class="text-xl text-justify">

Diffusion Probabilistic Models (DPM) have achieved excellent performance in various generation tasks, but their **High Training and Generation Time** have been criticized.

Similar to autoregressive models, the **Step-by-Step** generation approach leads to **Exposure Bias** in DPM. To achieve high-quality generation results, a significant amount of training time is required to reduce errors at each step.

</p>

<img v-click=1 class="m-auto pb-10" src="/imgs/duoduo.jpg" />
<myarrow
  v-click=1
  class="myarrow slidev-vclick-target slidev-vclick-hidden"
  x1=925 y1=375 x2=60 width=5 color=#a57></myarrow>

<p v-click=2 class="text-xl text-justify">
To alleviate this problem, the authors propose a surprisingly simple yet very effective method, which consists in explicitly modelling the prediction error during training.
</p>


<SlideCurrentNo class="absolute bottom-4 right-8" />

<style>
.myarrow.slidev-vclick-target {
  transition: all 1000ms ease;
}

.myarrow.slidev-vclick-hidden {
  translate: 1000px;
}
</style>

---

# Exposure Bias in DPM

<div v-click>
<myline x1=110 y1=170 y2=132.5 width=5 color=#a57></myline>
<myline x1=870 y1=170 y2=132.5 width=5 color=#a57></myline>
<myarrow x1=110 y1=135 x2=330 width=5 color=#a57></myarrow>
<myarrow x1=870 y1=135 x2=620 width=5 color=#a57></myarrow>

<span class="text-xl absolute left-85 top-30 pointer-events-none">$x_t\sim\mathcal{N}(x_t;\sqrt{\bar\alpha_t}x_0,1-\bar\alpha_t)$</span>
</div>

<img class="m-auto pt-20" src="/imgs/duoduo.jpg" />

<div v-click>
<myarrow x1=325 y1=290 y2=345 width=5 color=#a57></myarrow>
<myarrow x1=220 y1=345 y2=290 width=5 color=#a57></myarrow>

<span class="text-xl absolute left-38 top-88 pointer-events-none">$\hat x_t\sim\mathcal{N}(\hat x_t;\mu_{\theta}(\hat x_{t+1}),\sigma_t)$</span>
</div>


<div class="grid grid-cols-2">

<p v-click class="text-3xl text-center pt-20">

$\hat x_t=x_t+\underbrace{\textcolor{#a5a}{\xi_t}}_\text{Exposure Bias}$</p>

<img v-click class="ml-auto mr-auto" src="/imgs/exposure_bias.png" />

</div>

<SlideCurrentNo class="absolute bottom-4 right-8" />

---


<div class="grid grid-cols-2">

<div>

# Exposure Bias in DPM

<span class="text-xl">Supporting Evidence in Improved-DDPM</span>

<p class="text-2xl">

Ideally, the more steps the better.

</p>

<p v-click=1 class="text-2xl">
However, when the number of steps increases to more than 100~300,

the quality of the generated samples begins to decline.
</p>

<p v-click=2 class="text-2xl">
This is due to excessive error accumulation due to exposure bias.
</p>

</div>

<div>

<myellipse v-click=1 x=830 y=290 rx=100 ry=60 color=#a5a></myellipse>

<img class="m-auto" src="/imgs/iddpm-fig11.png"/>

<span class="text-base">cite: <a href="https://icml.cc/virtual/2021/poster/9531" target="_blank">Improved Denoising Diffusion Probabilistic Models.</a></span>

</div>

</div>

<SlideCurrentNo class="absolute bottom-4 right-8" />

---

# Solutions
<span class="text-xl">Smoother prediction function $\mu(\cdot)$</span>

## Regularization based on Lipschitz Continuous Functions

<p class="text-xl">

- Gradient penalty.
$\mathcal{L}_\text{GP}=\mathcal{L}_\text{DPM}+\lambda_\text{GP}{\Bigg\Vert\cfrac{\partial\epsilon_\theta(x_t,t)}{\partial x}\Bigg\Vert}^2$

- Weight decay.
$\mathcal{L}_\text{WD}=\mathcal{L}_\text{DPM}+\lambda_\text{WD}{\Vert\theta\Vert}^2$

</p>

## <span class="color-#a5a">**Regularization with Input Perturbation**</span>

<p class="text-xl">

Assume that the **Exposure Bias** follows a **Normal Distribution**  
$\Rightarrow$ 1. Two spatially close points $a$ and $b$ should lead to similar predictions $\mu(a, t)$ and $\mu(b, t)$.
</p>

<SlideCurrentNo class="absolute bottom-4 right-8" />

---

## Regularization with Input Perturbation

<p class="text-xl">

Assume that the **Exposure Bias** follows a **Normal Distribution**  
$\Rightarrow$ 1. Two spatially close points $a$ and $b$ should lead to similar predictions $\mu(a, t)$ and $\mu(b, t)$.
</p>

### $\Rightarrow$ 2. Gaussian Prediction Error

<div class="grid grid-cols-3">

<img class="m-auto w-4/5" src="/imgs/fig6/hist_gaussian_error_300step_pixel_2049.png"/>
<img class="m-auto w-4/5" src="/imgs/fig6/hist_gaussian_error_600step_pixel_2576.png"/>
<img class="m-auto w-4/5" src="/imgs/fig6/hist_gaussian_error_900step_pixel_3072.png"/>

</div>

<p class="text-xl">

The empirical distribution of $e^i_t=x_0-\hat x_0,\;\hat x_0\sim p_\theta(x_{0:t-1}|x_t)$, and $i$ is the input dimension.
- The Shapiro–Wilk test shows that they follow a standard normal distribution.
</p>

<SlideCurrentNo class="absolute bottom-4 right-8" />

<!--

we use 50 randomly selected $e^i_t$ values and the Shapiro–Wilk test
(Shapiro & Wilk, 1965) to verify that they follow a standard normal distribution. The confidence level is set at 95% and
we reject the null hypothesis if the p-value is less than 0.05. The null hypothesis was rejected only in a small minority of
cases, confirming that the error et is almost isotropic Gaussian distributed. Fig. 6 shows a few histogram examples for $e^t_i$
computed at different pixels.
-->

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

<div class="grid grid-cols-2">

<div>

# Comparison of Different Regularization Method

- GP costs more computation (second differential), but is no better than Input Perturbation.
- Attempting to remove the assumed bias (DDPM-$y$) actually makes it worse.

</div>

<img class="m-auto" src="/imgs/tab2.png" />

</div>

<img class="m-auto w-4/5 pt-10" src="/imgs/tab7.png" />

<SlideCurrentNo class="absolute bottom-4 right-8" />

---

# The Power of Input Perturbation

<img class="m-auto w-7/8 pt-10" src="/imgs/tab3.png" />

<SlideCurrentNo class="absolute bottom-4 right-8" />

---

# Reduce Training Time

<span></span>

<p>

- On CelebA, ADM-IP gets FID 1.51 at **120K training iterations**, whereas ADM gets FID 1.6 at convergence (**480K iterations**). <span v-click>$\Rightarrow$ **4$\times$ Training Speed-up**.</span>
- On FFHQ, ADM receives FID 14.52 at convergence (**420K iterations**), while ADM-IP achieves a FID score of 8.81 with **only 60K iterations**. <span v-click>$\Rightarrow$ **7$\times$ Training Speed-up**</span>
</p>

<div class="grid grid-cols-3">

<div>
<img class="m-auto h-200px" src="/imgs/fig3/cifar10.png" />
<p class="text-center text-2xl">

CIFAR-10 $32\times 32$
</p>
</div>

<div>
<img class="m-auto h-200px" src="/imgs/fig3/celeba.png" />
<p class="text-center text-2xl">

CelebA $64\times 64$
</p>
</div>
<div>
<img class="m-auto h-200px" src="/imgs/fig3/ffhq.png" />

<p class="text-center text-2xl">

FFHQ $128\times 128$
</p>
</div>
</div>

<SlideCurrentNo class="absolute bottom-4 right-8" />

---
<img class="m-auto" src="/imgs/tab3.png" />

<SlideCurrentNo class="absolute bottom-4 right-8" />

---

<div class="grid grid-cols-2">

<div class="mr-5">

# Conclusion

<span></span>

## Contributions

<p class="text-xl">

This study proposes a simple method to solve Exposure Bias in DPM.
- Significantly reduce training costs.
- Achieve the same generation quality as previous methods while reducing steps.

</p>

## Doubts

<p class="text-xl">

Assuming Bias as Gaussian Distribution conflicts with the behavior of DDPM-IP.

</p>

</div>

<img class="" src="/imgs/tab4.png" />

</div>

<SlideCurrentNo class="absolute bottom-4 right-8" />

---

# Discussions

<div class="grid grid-cols-2">

<div class="text-justify">
<img class="m-auto col-span-1" src="/imgs/fig5.png" />

Figure 5. Visualization of the exposure bias problem with different diffusion chain lengths.  
$\hat x_0\sim p(x_{0:t-1}|x_t)$ 
</div>

<p class="ml-2 col-span-1 text-justify">

## Why DDPM-IP Works?

DDPM-IP actually does not match what is stated in the paper:
- "Assume bias is a normal distribution" and
- "Remove bias"

Fig. 5 shows that DPM may excessively cut high-frequency signals when t is close to T. Therefore, the reason why DDPM-IP is effective may be due to "retaining more high frequencies."

</p>

</div>

<SlideCurrentNo class="absolute bottom-4 right-8" />
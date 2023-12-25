# Input-Perturbation-Reduces-Exposure-Bias-in-Diffusion-Models
[Input Perturbation Reduces Exposure Bias in Diffusion Models 筆記](https://toonnyy8-notes.github.io/Input-Perturbation-Reduces-Exposure-Bias-in-Diffusion-Models/)

# Conclusion
## Contributions

- 本篇研究提出了一個簡單的方法解決在 DPM 中的 Exposure Bias
- 大幅減少訓練成本
- 在減少步驟的情況下達到與過往方法相同的生成品質

## Doubts



## Why DDPM-IP Works?

將 Bias 假設為 Gaussian Distribution 與 DDPM-IP 的行為衝突。


DDPM-IP 實際上不符合論文中所述
- 『假設 bias 是常態分佈』並
- 『去除 bias』

Fig. 5 顯示 DPM 在 t 接近 T 時可能會過度削去高頻訊號，因此 DDPM-IP 有效的原因可能源自於『保留高頻』


<template>
  <v-app id="App">
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
@font-face {
  font-family: 'PromptReg';
  src: url('./assets/font/prompt/Prompt-Regular.ttf');
}
@font-face {
  font-family: 'PromptRegItal';
  src: url('./assets/font/prompt/Prompt-Italic.ttf');
}
@font-face {
  font-family: 'PromptBold';
  src: url('./assets/font/prompt/Prompt-SemiBold.ttf');
}
@font-face {
  font-family: 'PromptBoldItal';
  src: url('./assets/font/prompt/Prompt-SemiBoldItalic.ttf');
}
@font-face {
  font-family: 'PromptLight';
  src: url('./assets/font/prompt/Prompt-Light.ttf');
}
@font-face {
  font-family: 'PromptLightItal';
  src: url('./assets/font/prompt/Prompt-LightItalic.ttf');
}
@font-face {
  font-family: 'CourierReg';
  src: url('./assets/font/CourierNew/Courier New.ttf')
}

p {
  font-family: 'PromptReg';
}
p#code {
  font-family: 'CourierReg';
  display : inline;
}
p#i{
  font-family: 'PromptRegItal';
}
p#l{
  font-family: 'PromptLight';
}
p#li{
  font-family: 'PromptLightItal';
}
p#b{
  font-family: 'PromptBold';
}
p#bi{
  font-family: 'PromptBoldItal';
}
h1,h2,h3 {
  font-family: 'PromptBold';
}
h1#i,h2#i,h3#i {
  font-family: 'PromptBoldItal';
}
* {
  font-family: 'PromptReg';
}
* a {
    text-decoration: none;
}
</style>

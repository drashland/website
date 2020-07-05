<script>
export const resource = {
  paths: ["/about-drash"],
  meta: {
    title: "About Drash",
    source_code_uri: "/about_drash",
  }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/about_drash'],
      toc: {
        items: [
          "What Is Drash?",
          "Why Use Drash?",
          "About These Documentation Pages",
        ]
      }
    };
  },
}
</script>

<template lang="pug">
page(
  :toc="toc"
)
  div.row
    div.col
      hr
      h2-hash What is Drash?
      p Drash is a REST microframework for <a href="https://deno.land" target="_BLANK">Deno</a>'s HTTP server with zero dependencies.
      p Drash is designed to help you build your projects quickly with the ability to scale. You can build an API, a web app, an SPA (like these documentation pages), or even a static HTML site. How you use Drash is up to you, so it can be everything you need and nothing you don't &mdash; like a DRASH tent.
  div.row
    div.col
      hr
      h2-hash Why Use Drash?
      p Drash takes concepts from the following:
      ul
        li <a href="https://flask.palletsprojects.com/en/1.1.x/" target="_BLANK">Flask</a> &mdash; being <a href="https://flask.palletsprojects.com/en/1.1.x/foreword/#what-does-micro-mean" target="_BLANK">micro</a> and extensible
        li <a href="https://laravel.com/" target="_BLANK">Laravel</a> &mdash; use of similarly styled <a href="https://laravel.com/docs/master/middleware">middleware</a>
        li <a href="https://www.peej.co.uk/tonic/" target="_BLANK">Tonic</a> &mdash; use of <a href="https://github.com/peej/tonic#how-it-works" target="_BLANK">resources</a>
        li <a href="https://www.restapitutorial.com/lessons/whatisrest.html" target="_BLANK">RESTful</a> principles &mdash; content negotiation, HTTP verbs, URIs, etc.
      p Thrown into the mix is Drash's own concepts such as:
      ul
        li Documentation-driven development
        li Test-driven development
        li Lowering barriers to usage
        li Zero dependencies
      p Drash does not force you to use all of its code. You can pick and choose which data members you want/need and use them however you deem fit. For example, Drash comes with a console logger and a file logger. If you only want these, then you only import these into your non-Drash project. How you use it is really up to you.
      P Drash's versioning system will always follow <a href="https://semver.org/" target="_BLANK">semver.org</a>. Also, Drash's versions will always be compatible with Deno's versions. That is, Drash v1.x will always be compatible with Deno v1.x, Drash v2.x will always be compatible with Deno v2.x, and so on.
  div.row
    div.col
      hr
      h2-hash About These Documentation Pages
      p We know the pain of using new software that is not extensively documented. Therefore, all released Drash code that is intended to be used is documented. Anything that will be released will be documented before being released. This is how we lower our barriers to usage, so you can continue coding your Drash (or non-Drash) project confidently without questions.
      p Most of the pages on this site are written in a tutorial format. You are given an introduction to the page, example code, and an end state that you can work towards. These pages mostly assume you have no working knowledge of Drash and try to be explicit as possible in the instructions. Moreover, the example code can be downloaded from the documentation repository.
      p The API Reference pages display documentation about Drash's data members. These pages take what is written in the source code's doc blocks and display them nicely in a readable format. Doing it this way allows us to keep Drash's API Reference up to date with the code.
</template>

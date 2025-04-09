import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import esbuild from "lume/plugins/esbuild.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import inline from "lume/plugins/inline.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume({
  src: './pages',
  dest: './docs',
  prettyUrls: false
});
site.data('layout', 'layout.vto');

site.use(esbuild());
site.use(code_highlight());
site.use(date());
site.use(inline());
site.use(jsx());
site.add("scripts")
site.add("assets", ".")
export default site;

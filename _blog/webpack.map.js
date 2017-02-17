webpack(options,callback);
  let compiler;
  if(Array.isArray(options)) {
    compiler = new MultiCompiler(options.map(options => webpack(options)));
  } else if(typeof options === "object") {
    compiler = new Compiler();
      this.options = {};
    compiler.context = options.context;
    compiler.options = options;

    compiler.options = new WebpackOptionsApply().process(options, compiler);

      compiler.apply(new EntryOptionPlugin());
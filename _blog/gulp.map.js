gulp.src('*.js':glob)
	var globStream = gs.create(glob,options)
		// if globs is not an array
		// create a stream for a single glob
		var globStream = gs.createStream(globs,null,opt)
const path=require('path'),webpack=require('./vendor/webpack');module.exports=(a)=>{const b=a.requireCordovaModule('q').defer(),c=path.resolve(a.opts.projectRoot,'webpack.config.js'),d=require(c),e=webpack(d);return e.run((a,c)=>{a&&b.reject(a),console.log(c.toString({chunks:!1,colors:!0})),b.resolve()}),b.promise};
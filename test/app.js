var tobi = require('tobi'),
    express = require('express'),
    resmin = require('../index'),
    app = express.createServer();

var resminConfig = {
    js: {
        "all": [
            "//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js",
            "//ajax.googleapis.com/ajax/libs/jqueryui/1.8.13/jquery-ui.min.js",
            "/js/foo.js",
            "/js/bar.js",
            "/js/baz.js"
        ]
    },
    javascripts: {
        "all": [
            "/js/foo.js",
            "/js/bar.js",
            "/js/baz.js"
        ]
    },
    css: {
        "all": [
            "//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js",
            "//ajax.googleapis.com/ajax/libs/jqueryui/1.8.13/jquery-ui.min.js",
            "//fonts.googleapis.com/css?family=Indie+Flower:regular&v1",
            "//fonts.googleapis.com/css?family=Inconsolata:regular&v1",
            "/css/foo.css",
            "/css/bar.css",
            "/css/baz.less",
			"/css/qux.styl"
        ]
    },
    stylesheets: {
        "all": [
            "//fonts.googleapis.com/css?family=Indie+Flower:regular&v1",
            "//fonts.googleapis.com/css?family=Inconsolata:regular&v1",
            "/css/foo.css",
            "/css/bar.css",
            "/css/baz.less",
            "/css/qux.styl"
        ]
    }
};

app.configure(function(){
    app.use(express.logger());
    app.use(express.bodyParser());
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    resminConfig.merge = true;
    resminConfig.minify = true;
    resminConfig.gzip = true;
    app.use(resmin.middleware(express, __dirname + '/public', resminConfig));
});

app.dynamicHelpers(resmin.dynamicHelper);

app.get('/', function(req, res) {
    res.render('index');
});

var browser = tobi.createBrowser(app);
browser.get('/', function (res, $){
    res.should.have.status(200);
    res.should.not.have.status(500);
    res.should.have.header('Content-Type', 'text/html; charset=utf-8');

    var css = $("ul.css"),
        stylesheets = $("ul.stylesheets"),
        js = $("ul.js"),
        javascripts = $("ul.javascripts");

    css.should.have.many("li");
    stylesheets.should.have.many("li");
    js.should.have.many("li");
    javascripts.should.have.many("li");

	console.log("");
    console.log("css files:");
    css.find("li").each(function(i,elm){
        console.log(elm.innerHTML);
    });

    console.log("");
    console.log("stylesheets files:");
    stylesheets.find("li").each(function(i,elm){
        console.log(elm.innerHTML);
    });

	console.log("");
    console.log("js files:");
    js.find("li").each(function(i,elm){
        console.log(elm.innerHTML);
    });

    console.log("");
    console.log("javaScripts files:");
    javascripts.find("li").each(function(i,elm){
        console.log(elm.innerHTML);
    });

	console.log("");
	browser.get("/css/baz.less", function (res, $) {
		res.should.have.status(200);
		res.should.not.have.status(500);
		res.should.have.header('Content-Type', 'text/css');
		console.log("Real-time compilation of LESS in 'css' folder: Passed!");

		console.log("");
		browser.get("/css/qux.styl", function (res, $) {
			res.should.have.status(200);
			res.should.not.have.status(500);
			res.should.have.header('Content-Type', 'text/css');
			console.log("Real-time compilation of Stylus in 'css' folder: Passed!");

			console.log("");
			console.log("All tests passed!");
			app.close();
		});
	});

    console.log("");
    browser.get("/stylesheets/baz.less", function (res, $) {
        res.should.have.status(200);
        res.should.not.have.status(500);
        res.should.have.header('Content-Type', 'text/css');
        console.log("Real-time compilation of LESS in 'stylesheets' folder: Passed!");

        console.log("");
        browser.get("/stylesheets/qux.styl", function (res, $) {
            res.should.have.status(200);
            res.should.not.have.status(500);
            res.should.have.header('Content-Type', 'text/css');
            console.log("Real-time compilation of Stylus in 'stylesheets' folder: Passed!");

            console.log("");
            console.log("All tests passed!");
            app.close();
        });
    });
});


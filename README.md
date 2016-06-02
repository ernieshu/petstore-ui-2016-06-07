# petstore-ui

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

On a Windows 7 / 8 / 10 machine, it was found that installing PhantomJS globally was necessary (npm install -g phantomjs), and set the value of 'PHANTOMJS_BIN' to equal the return value of 'which phantomjs'.


## Customization Additions

* Added 'ng tags input' library for multiple single input
* Added 'bootstrap' for much nicer look and feel
** Note that had to revert to bootstrap version 3.3.4 
** Execute via commands 'npm install bootstrap@3.3.4 --save/ bower install bootstrap#3.3.4 --save'
# ember-x-collapse

Plugin for ember-cli that makes Twitter Bootstrap collapse component available.

## Installation

To install simply run:

```
npm install git+ssh://git@github.com:webnuts/ember-x-collapse.git --save-dev
ember g ember-x-collapse
```

## Usage

Once installed, you can use the plugin right away inside your template files:

```
{<div class="navbar-header">
  {{#x-collapse tagName='button' type='button' selector='#top-menu' class="navbar-toggle" collapseOnClickLinkInsideSelector=true}}
    <span class="sr-only">Toggle navigation</span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  {{/x-collapse}}
</div>
<div class="collapse navbar-collapse" id="top-menu">
  <ul class="nav navbar-nav">
    <li>{{#link-to "index"}}Forside{{/link-to}}</li>
    <li>{{#link-to "categories"}}Turkalender{{/link-to}}</li>
    <li>{{#link-to "catalog"}}Katalog{{/link-to}}</li>
    <li>{{#link-to "pages"}}Kontakt os{{/link-to}}</li>
  </ul>
</div>
```

## Configuration

The plugin currently supports the following attributes:

### selector

The CSS selector for the element which is collapsed / opened when the button is clicked.

### collapseOnClickLinkInsideSelector

Set this to true, if you want any link inside the collapseable content to close the collapse area on click.
That makes sence for a menu, which should collapse, when a menuitem is clicked.
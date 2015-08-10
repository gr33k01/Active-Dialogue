# Active-Dialogue

A simple script for launching and cycling though modal content windows.

## Requirements

* [jQuery](http://jquery.com/)
* Some sweet modal content.

## HTML structure

```html
<a data-fire="myDialogueBox">Launch Dialogue Box</a>

<div class="modal" id="myDialogueBox">
  <div class="modal-box">
  <p>Sweet modal content goes here.</p>
    <div class="navigation">
      <a class="modal-next">Next</a>
      <a class="modal-prev">Previous</a>
    </div>
  </div>
</div>
```

## Getting started

* `git clone` into your project or download as .zip and copy files into your project.
* Link script and stylesheet in the ```<head>``` tag.

```html
<link href="css/activeDialogue.css" type="text/css" rel="stylesheet" />
<script src="activeDialogue.js" type="text/javascript"></script>
```

* Call the crap out of that init method when the DOM is ready.

```javascript
activeDialogue.init();
```

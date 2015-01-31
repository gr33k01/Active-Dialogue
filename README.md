# Active-Dialogue

A simple, modular script for launching and cycling though modal content windows.

## Requirements

* [jQuery](http://jquery.com/)

## HTML structure

```html
<a data-fire="myDialogueBox">Launch Dialogue Box</a>

<div class="modal" id="myDialogueBox">
  <div class="modal-box">
  <p>Modal content goes here</p>
    <div class="navigation">
      <a class="modal-next">Next</a>
      <a class="modal-prev">Prev</a>
    </div>
  </div>
</div>
```

## CSS

Styling is mostly defered to your CSS but should at least include: 

```css
.modal {
  display: none;
  position: fixed;
}
```

However, I recommend hooking up ```activeDialogue.css```.

## Getting started

* `git clone` into project or download as .zip and copy files into project.
* Link script and stylesheet in the head.

```html
<link href="css/activeDialogue.css" type="text/css" rel="stylesheet" />
<script src="activeDialogue.js"></script>
```

* Call init method when the DOM is ready.

```javascript
activeDialogue.init();
```

* You can also open dialogue boxes by passing an ID to the open method.

```javascript
activeDialogue.open('myDialogueBox');
```

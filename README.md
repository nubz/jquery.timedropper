# jquery.timedropper

A simple plugin to convert a text input into a drop down of times of the day. Much like the one in use on Google Calendar, when implementing it you can specify the increment (e.g. 30 mins to get 00:00, 00:30, 01:00  or 15 mins to get 00:00, 00:15, 00:30 etc)

## Requires

jQuery

## Installation

Include script *after* the jQuery library (unless you are loading or packaging scripts in another way):

    <script src="/path/to/jquery.timedropper.js"></script>

## Usage

Create a timedropper from a text input:

    $('input#time').timedropper();

Be sure to include this JavaScript after your HTML has rendered or inside a $(document).ready(){ ... } wrapper

## Options

Options can be fed into the intitialisation of the plugin, this example shows all options being set:

    $('#time').timedropper(
        'increment': 30,
        'el_id': 'td-wrapper',
        'listclass': 'td-default',
        'width' : '60px'
    );

    increment : 30
    
the difference, in minutes, between each time in the list

    el_id : td-wrapper
    
the id of the div created by the plugin to wrap the input in - use your own custom css on #td-wrapper if you like or if the id does not suit then set your own (without the #, e.g. 'el_id' : 'my-id')

    listclass : td-default
    
default css will wrap the drop down list in a scrollable box same width as the input - you can override this by using your own listclass value

    width : 60px
    
the width of the input (and drop down if no custom css class is supplied to the listclass option)

## Changelog

## Development

- Source hosted at [GitHub](https://github.com/nubz/jquery-timedropper)
- Report issues, questions, feature requests on [GitHub Issues](https://github.com/nubz/jquery-timedropper/issues)

## Authors

[Alistair Macdonald](https://github.com/nubz)

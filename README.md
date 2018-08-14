# No longer supported

***
***
***
***
***
***
***
***
***
***
***
***
***
***
***
***
***

# Marquee State Element

This element is **not** all that useful as a card (it can be used for that to), the purpose of this is to give the option to add static text on a `picture-elements` card.

## Options

| Name | Type | Default |Required | Description
| ---- | ---- | ------- | ------- | -----------
| type | string | None | Yes | `custom:marquee-state-element`
| entity | string | None | Yes | The entity_id of the entity you want to show.
| width | string | 450px | No | Width of the marquee element.
| height | string | 50px | No | Hight for the marquee element.
| speed | string | 10 | No | The spped of the animation `1-100` higher = slower.
| wait | string | 0 | No | Wait period before starting the animation `1-50` higher = longer wait.

## Installation

### Step 1

Install `marquee-state-element` by copying `marquee-state-element.js`from this repo to `<config directory>/www/marquee-state-element.js` on your Home Assistant instanse.

**Example:**

```bash
wget https://raw.githubusercontent.com/custom-cards/marquee-state-element/master/marquee-state-element.js
mv marquee-state-element.js /config/www/
```

### Step 2

Link `marquee-state-element` inside you `ui-lovelace.yaml`.

```yaml
resources:
  - url: /local/marquee-state-element.js?v=0
    type: js
```

### Step 3

Add a custom element in your `ui-lovelace.yaml`

```yaml
      - type: picture-elements
        image: /local/files/LUfuf8ow.jpg
        elements:
          - type: custom:marquee-state-element
            entity: sensor.my_marquee_text
            style:
              top: 10%
              left: 5%
              width: 100%
              max-width: 100%
```

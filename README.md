This is a monorepo for the [llmpeople project - chat with a 3D model powered by ChatGPT.](https://www.llmpeople.com/)

It uses BabylonJS, NextJS, TypeScript, and the OpenAI API.

# HOW TO SET UP

An OpenAI API key is required. Check out the OPENAI_API_KEY env var in the .env file. If instead of OpenAI's voices you wish to use Google Cloud's voices, you'll need a Google Cloud API key - and use the GOOGLE_CLOUD_API_KEY env var instead.

1. **Install npm** - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) and node version 18.14.2 are recommended (this is the LTS version as of June 25 2023)

2. **Make sure npm is installed**. You can run `npm -v` to check if it's installed.

3. **Install yarn** - `npm install --global yarn`

4. **Install the dependencies** - Simply run `yarn` in the root folder of this project.

5. **Run the project** - Run `yarn dev` in the root folder of this project.

# Models

There are 2 models available:

1. [A VRoid model](https://vroid.com/en/studio)

2. [A free renderpeople model](https://renderpeople.com/free-3d-people/)

You can switch between these models in the settings modal.

# Share your model and settings

You can share your model and settings by copying the URL in the settings modal. This URL contains the model and settings you are currently using. When someone visits this URL, they will see the same model and settings you are currently using. For example, the following URL:

[https://www.llmpeople.com/?model=vest_dude&voice=fable&prompt=Prompt+-+respond+as+spongebob](https://www.llmpeople.com/?model=vest_dude&voice=fable&prompt=Prompt+-+respond+as+spongebob)

Will load the `vest_dude` model, the `fable` voice, and the prompt `Prompt - respond as spongebob`

# Use a custom model

If you wish to use a custom model, the recommended way is to use [Blender](https://www.blender.org/) and follow the steps below:

1. Export the model as .glb
2. Save the .glb file in the public folder of this project
3. Create a new config for the model in the constants.ts file. If the model filename is `my_new_model.glb`, we will need to update the `models` object with the following:

```javascript
export const models = {
  vroid_girl1: defaultConfig,
  vest_dude: {
    // (vest_dude's model config)
  },
  my_new_model: {
    // (my_new_model's model config - add your config here)
  },
} as const;

```

The model's filename should match the key in the `models` object. In this example, the key is `my_new_model` and the filename is `my_new_model.glb`.

To simplify the configuration step, we can start with the defaultConfig: `my_new_model: defaultConfig`, and then adjust it as necessary. For example, let's image that our custom model only has 1 idle animation: `custom_idle_animation` - we would need to update the `models` object as follows:

```javascript
export const models = {
  vroid_girl1: defaultConfig,
  vest_dude: {
    // (vest_dude's model config)
  },
  my_new_model: {
    ...defaultConfig,
    idleAnimations: ['custom_idle_animation'] // add custom idle animation here.
  },
} as const;

```

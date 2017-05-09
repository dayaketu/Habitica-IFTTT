In just a few steps, you can set up IFTTT to add a To-Do in Habitica:

# Set up the .env file in Glitch

Go to your [Habitica API settings](https://habitica.com/#/options/settings/api) to obtain your user ID and API token. Paste these as the values for `HABITICA_USER` and `HABITICA_API_KEY` in the `.env` file. The `.env` file is private and only visible to you unless you specifically invite a collaborator to edit your code.

For `GLITCH_APP_KEY`, make up a string of letters and numbers you will use in your request to help prevent random people from triggering this action. You can use [random.org](https://www.random.org/passwords/?num=5&len=16&format=html&rnd=new) or a similar site to help you generate this.

# Triggering your Habitica action from IFTTT:

In IFTTT, create a new applet by selecting 'New Applet'.

For the 'if' condition, select whatever service notification you want to use to add a To-Do in Habitica. In this example, I used Google Assistant.

For the 'then' condition, search and select 'Maker', and use the 'Make a web request' action. Set the URL to your Glitch project URL - this has the format of '`https://project-name.glitch.me/`', so in this example I used 'https://habitica-ifttt-action.glitch.me'. Set the Method to '`POST`' and Content Type to '`application/x-www-form-urlencoded`'. 

e.g. ![](https://cdn.glitch.com/4761356a-9369-4e79-9d1e-a8306e8c00b5%2FiftttWebRequestSettings.png)

Now when that service triggers, Glitch will receive a request. All that's left now is to get Glitch to then trigger multiple services back in IFTTT.

# Stage 2: Setup your Glitch app to trigger multiple services:

From your [Maker settings page](https://ifttt.com/services/maker/settings) in IFTTT, copy and paste the `URL` value for the `IFTTT_MAKER_URL` variable into the `.env` file in your Glitch project.

![](https://cdn.glitch.com/4761356a-9369-4e79-9d1e-a8306e8c00b5%2FiftttMakerURL.png)

Then, for each service that you want your Glitch app to trigger you need to create a new applet in IFTTT. For each one:

- Create a new applet by selecting ‘New Applet’

  For the 'if' condition, search and select 'Maker', and use the 'Receive a web request' action. Set an event name, and set that event name against the `IFTTT_SERVICE_X` variable in the `.env` file in your Glitch project. E.g. if I created an event name called 'lights_on', I would set `IFTTT_SERVICE_1=lights_on` in `.env`.

- For the 'then' condition, search and select whatever service you want to trigger, such as turning on your lights, turning off a plug, sending an email etc. and click ‘finish’ to create the applet.

Repeat for each service. By the end your `.env` file will look a bit like:
![](https://cdn.glitch.com/4761356a-9369-4e79-9d1e-a8306e8c00b5%2FiftttEnvFile.png)

# The Result

Once done, upon receiving a request your Glitch app will trigger those multiple other triggers in IFTTT. So in this example, when I hit the IFTTT button, my lights go off, the thermostat is set to away, and my cameras are turned on, so I'm all set to go out.
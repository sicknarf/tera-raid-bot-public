# Sicknarf's Tera Raid Bot

___

Welcome to to the Tera Raid Bot! To get started, click [here](https://discord.com/api/oauth2/authorize?client_id=1064068854071963698&permissions=2198888513521&scope=bot%20applications.commands) and add the bot to your server! 

### [click here to jump to the setup guide](#setup-guide)

## how to use

Once you are all set up, using it is pretty straightforward. Just start with `/host`.

1. Type `/host` to start the bot

    ![hostcommand](how-to-images/howto_1.png)

2. Enter the Pokémon that you are raiding, the tera type, and how many stars this raid is.

    ![](how-to-images/howto_2.png)

3. The post has been made! If there is a chance of each flavor of Herba Mystica to drop, the post will be marked as such.

    ![](how-to-images/howto_3.png) ![](how-to-images/howto_4.png)

4. Other trainers can now click ✅ to join the raid! Once it is full, the button will become unclickable.

    ![](how-to-images/howto_5.png)

5. If someone changes their mind and can no longer do the raid, just click ⬅️, and this message will display:

    ![](how-to-images/howto_6.png)
    
6. Once you are ready (you don't need to wait for 4 people), click START and it will ping everyone to get ready! Then send over the link code!

    ![](how-to-images/howto_7.png)

7. If for any reason you can no longer start the raid, simply click 🛑.

    ![](how-to-images/howto_8.png)

If you are worried about non-hosts trying to start and cancel the raid, this has already been accounted for:

![nonhoststart](how-to-images/user_management_1.png) ![nonhostcancel](how-to-images/user_management_2.png)

___

## setup guide

Once you've clicked the above link, there are a few simple steps to get full bot functionality onto your server. Click on the arrow icon for screenshot examples below.

1. Go to the server settings of your Discord.

    ![serversettings](how-to-images/setup_1.png)

2. Under `integrations`, look for `Sicknarf's Tera Raid Bot` and click `manage`.

    ![manageintegrations](how-to-images/setup_2.png)

3. Remove access to all channels, then add the channel you want to add the bot to.

    ![channelaccess](how-to-images/setup_3.png)

4. Then, go into the channel settings of the channel that you've added the bot to.

    ![channelsettings](how-to-images/setup_4.png)

5. Under `permissions`, click `Add members or roles`.

    ![permissions](how-to-images/setup_5.png)
    
6. Add `Tera Raid Bot` to permitted members.

    ![permitbot](how-to-images/setup_6.png)

7. Then, expand `Advanced permissions`.

    ![advancedpermissions](how-to-images/setup_7.png)

8. Make sure the following permissions are approved for Tera Raid Bot: ***this next step is imperative for bot function***

    - View Channel [^1]
    - Send Messages [^1]
    - Embed Links [^1]
    - Manage Messages [^1]
    - Use Application Commands [^1]
    - Read Message History [^1]
    - Send Messages in Threads [^bignote]
    - Create Public Threads [^bignote]
    - Create Private Threads [^bignote]
    - Attach Files [^bignote]
    - Add Reactions [^bignote]
    - Use External Emoji [^bignote]
    - Use External Stickers [^bignote]
    - Mention `@everyone`, `@here`, and All Roles [^bignote]
    - Manage Threads [^bignote]

    ![channelpermissions](how-to-images/setup_8.png)

After that, you should be all set up and ready to use the bot!

___

## about me

My name is Francis, and you can find me across the internet with variations of the username `sicknarf`. I'm a dev currently on the hunt for a job, so if you're enjoying the bot and need a jr. dev for some work, make sure to shoot me a message!

Here are my socials! [instagram](http://instagram.com/sicknarf/) | [twitch](http://twitch.tv/sicknarf) | [twitter](http://twitter.com/sick_narf)

___

## facing issues?

If you're facing issues with this bot, I recommend the following:

- check that you have the permissions properly set up in the channel
- if you have done that, uninstall and reinstall the bot
- if the issue still persists, please either submit an issue ticket [here](https://github.com/sicknarf/tera-raid-bot-public/issues) or shoot me a message [on twitter](http://twitter.com/sick_narf)


___

[^1]: This is imperative for the code to function
[^bignote]: This is for future functionality. 
    You don't have to turn these on,
    BUT leaving them off my impair how the bot works.
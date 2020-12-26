// ==UserScript==
// @name         Drawesome Mods - Erase drawings
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Erase other users drawing when being host.
// @author       VICE
// @match        https://drawesome.uy/
// @repository   https://github.com/JustVice/drawesome-mods
// ==/UserScript==

(function () {

    /**
     * -----------------------------------------------------------------------------------------
     * USER DOCUMENTATION
     * -----------------------------------------------------------------------------------------
     * To set this script, you must manually edit the variables inside settings const variable.
     * 
     * |||----- Variables:
     * --- run
     * Possible values: true, false .
     * If true, the script will run next time you refresh the web page.
     * If false, script won't be execute Erase button emulation.
     * 
     * --- usernames
     * List of the usernames to emulate Erase button pressing. Username must be an exact match.
     * Syntax must be the following:
     * Multiple usernames -> usernames: ["username1", "username2", "username3", "username4", "username4"],
     * Single username -> usernames: ["single_username"]
     * 
     * --- time
     * Time interval between emulating Erase button pressing. It is expressed in milliseconds.
     * Setting a value inferior than 1000 (1 second) is not recommended since it could freeze or significantly
     * consume CPU resources.
     * Press Erase button every 1 second -> time: 1000
     * Press Erase button every 5 seconds -> time: 5000
     * 
     * |||-----settings object examples.
     
    // Don't run button pressing script.
    // Multiple usernames.
    // Press buttons every 2 seconds.
    
    const settings = {
        run: false,
        usernames: ["example_user_1", "example_user_2", "example_user_3", "example_user_3"],
        time: 2000
    };

    // Run button pressing.
    // Single usernames.
    // Press buttons every 10 seconds.

    const settings = {
        run: true,
        usernames: ["example_user_1"],
        time: 10000
    };

     */


    const settings = {
        run: true,
        usernames: ["example_user_1", "example_user_2", "example_user_3"],
        time: 2000
    };

    /**
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     * DEVELOPER AREA (SHOULD NOT BE EDITED BY USERS).
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------
     */

    window.onload = () => {
        const delete_user_drawing = () => {
            for (let i = 0; i < settings.usernames.length; i++)
                ios.emit("derase", settings.usernames[i]);
        }

        if (settings.run)
            setInterval(() => { delete_user_drawing() }, settings.time);
    };
})();
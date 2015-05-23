'use strict';

/**
 * Minature pub sub module for working with pub sub in a common js pattern
 * @module common-js-pub-sub
 * @returns { Object } events
 * @returns { function } events.publish
 * @returns { function } events.subscribe
 */
module.exports = function () {

    var topics = {};

    /**
     * Subscribe to a topic
     * @param  { string } topic - Name of the topic to subscribe to
     * @param  { function } listener - Callback to be run when the topic is published
     * @returns {[type]}
     */
    function subscribe(topic, listener) {
        // Create the topic's object if not yet created
        if (!topics[topic]) {
            topics[topic] = {
                queue: []
            };
        }

        // Add the listener to queue
        var index = topics[topic].queue.push(listener) - 1;

        // Provide handle back for removal of topic
        return {
            /**
             * removes the topic from the queue
             */
            remove: function () {
                delete topics[topic].queue[index];
            }
        };
    }

    /**
     * Publish a topic
     * @param  { string } topic - Name of the topic to be published
     * @param  { Object } info - Object containing any additional information you want available to the subscribe function
     */
    function publish(topic, info) {
        // If the topic doesn't exist, or there's no listeners in queue, just leave
        if (!topics[topic] || !topics[topic].queue.length) {
            return;
        }

        // Cycle through topics queue and call the function!
        var items = topics[topic].queue;

        for (var i = 0; i < items.length; i++) {
            if(info === undefined){
                items[i]()
            }else{
                items[i](info)
            }

        }
    }

    return {
        subscribe: subscribe,
        publish: publish
    };
};

// replace these values with those generated in your TokBox Account
// var apiKey = "46780794";
// var sessionId = "1_MX40Njc4MDc5NH5-MTU5MTQ0NTk5ODY2MH53empUV0lhcWRDREozeTBLN1lUcy9VcE9-UH4";
// var token = "T1==cGFydG5lcl9pZD00Njc4MDc5NCZzaWc9OTM0NDMzNDkxYTdiMDA0NzAwMDViMTg1ZTY4ZjllNjg1MjA2NmQzMzpzZXNzaW9uX2lkPTFfTVg0ME5qYzRNRGM1Tkg1LU1UVTVNVFEwTlRrNU9EWTJNSDUzZW1wVVYwbGhjV1JEUkVvemVUQkxOMWxVY3k5VmNFOS1VSDQmY3JlYXRlX3RpbWU9MTU5MTQ0NjAyOSZub25jZT0wLjQ0MDgzNzQ0MzQ0OTQ3OTUmcm9sZT1tb2RlcmF0b3ImZXhwaXJlX3RpbWU9MTU5NDAzODAyOCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

// (optional) add server code here
var SERVER_BASE_URL = 'https://dedman.herokuapp.com';
fetch(SERVER_BASE_URL + '/session').then(function(res) {
    return res.json()
}).then(function(res) {
    apiKey = res.apiKey;
    sessionId = res.sessionId;
    console.log(sessionId);
    token = res.token;
    initializeSession();
}).catch(handleError);


// initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
        alert(error.message);
    }
}

function addSubsriber(session){
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
            insertMode: 'append',
            width: '100%',
            height: '100%'
        }, handleError);
        console.log('subscriber')
    });
}

function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);

    // Subscribe to a newly created stream
    addSubsriber(session);

    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
    }, handleError);

    // Connect to the session
    session.connect(token, function(error) {
        // If the connection is successful, publish to the session
        if (error) {
            handleError(error);
        } else {
            session.publish(publisher, handleError);
        }
    });
}
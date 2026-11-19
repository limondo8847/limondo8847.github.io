function FindProxyForURL(url, host) {
    if ( shExpMatch(host, "*.digitalartscloud.com")
     ||  shExpMatch(host, "*.jamfcloud.com")){
    return "PROXY 127.0.0.1:0";
}
    return "DIRECT";
}

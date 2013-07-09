
//Removed alert from this function
D2L.PT.Auth.SessionTimeout.Reset = function () {
    var me = D2L.PT.Auth.SessionTimeout;
    var beforeTime = 5 * 60 * 1E3;
    if (me.m_sessionLength <= beforeTime)
        if (me.m_sessionLength > 6E4) beforeTime = 6E4;
        else beforeTime = 0;
    var now = new Date;
    me.m_timeoutTime = now.getTime() + me.m_sessionLength;
    me.m_timeoutIsHandled = false;
    setTimeout(function () {
        var now2 = new Date;
        if (!me.m_timeoutIsHandled && now2.getTime() + 1E3 >= me.m_timeoutTime - beforeTime) {
            me.m_timeoutIsHandled = true;
            me.Renew()
        }
    },2000)
}
//////////////////////////////////////////////////////////////////////
// terminal emulator
var rebrow_cli = (function() {
    var terminal;
    var config
        , events = $({});

    function init(opts) {
        config = opts;
        
        var prompt = [
            "<div class='line'>" +
            "<span class='prompt'>"+config.cliPrompt+"</span>" +
            "<input type='text' class='readLine active' />" +
            "</div>"
        ].join('');

        terminal = new ReadLine({
            htmlForInput : function() {return prompt},
            handler      : process
        });
    }

    function process(command, callback) {
        var cmd = command.split(' ')[0];
        if (!cmds[cmd] === true) {
            callback("(error) ERR unknown command '"+cmd+"'");
            return;
        }

        $.ajax({
            beforeSend: function(request) {
                request.setRequestHeader("Authority", "adadasfsdfgwet6342tadfg.kljhadljkgbz");
            },
            url     : config.absoluteUrl+'/cli?command='+command,
            success : callback
        });
    }

    function focus() {
        terminal.focus();
    }

    var cmds = {
    'append'           : true,
    'auth'             : true,
    'bgrewriteaof'     : true,
    'bgsave'           : true,
    'blpop'            : true,
    'brpop'            : true,
    'brpoplpush'       : true,
    'config'           : true,
    'dbsize'           : true,
    'debug'            : true,
    'decr'             : true,
    'decrby'           : true,
    'del'              : true,
    'discard'          : true,
    'echo'             : true,
    'exec'             : true,
    'exists'           : true,
    'expire'           : true,
    'expireat'         : true,
    'flushall'         : true,
    'flushdb'          : true,
    'get'              : true,
    'getbit'           : true,
    'getrange'         : true,
    'getset'           : true,
    'hdel'             : true,
    'hexists'          : true,
    'hget'             : true,
    'hgetall'          : true,
    'hincrby'          : true,
    'hkeys'            : true,
    'hlen'             : true,
    'hmget'            : true,
    'hmset'            : true,
    'hset'             : true,
    'hsetnx'           : true,
    'hvals'            : true,
    'incr'             : true,
    'incrby'           : true,
    'info'             : true,
    'keys'             : true,
    'lastsave'         : true,
    'lindex'           : true,
    'linsert'          : true,
    'llen'             : true,
    'lpop'             : true,
    'lpush'            : true,
    'lpushx'           : true,
    'lrange'           : true,
    'lrem'             : true,
    'lset'             : true,
    'ltrim'            : true,
    'mget'             : true,
    'monitor'          : true,
    'move'             : true,
    'mset'             : true,
    'msetnx'           : true,
    'multi'            : true,
    'object'           : true,
    'persist'          : true,
    'publish'          : true,
    'ping'             : true,
    'quit'             : true,
    'randomkey'        : true,
    'rename'           : true,
    'renamenx'         : true,
    'rpop'             : true,
    'rpoplpush'        : true,
    'rpush'            : true,
    'rpushx'           : true,
    'sadd'             : true,
    'save'             : true,
    'scard'            : true,
    'sdiff'            : true,
    'sdiffstore'       : true,
    'select'           : true,
    'set'              : true,
    'setbit'           : true,
    'setex'            : true,
    'setnx'            : true,
    'setrange'         : true,
    'shutdown'         : true,
    'sinter'           : true,
    'sinterstore'      : true,
    'sismember'        : true,
    'slaveof'          : true,
    'smembers'         : true,
    'smove'            : true,
    'sort'             : true,
    'spop'             : true,
    'srandmember'      : true,
    'srem'             : true,
    'strlen'           : true,
    'sunion'           : true,
    'sunionstore'      : true,
    'sync'             : true,
    'ttl'              : true,
    'type'             : true,
    'watch'            : true,
    'zadd'             : true,
    'zcard'            : true,
    'zcount'           : true,
    'zincrby'          : true,
    'zinterstore'      : true,
    'zrange'           : true,
    'zrangebyscore'    : true,
    'zrank'            : true,
    'zrem'             : true,
    'zremrangebyrank'  : true,
    'zremrangebyscore' : true,
    'zrevrange'        : true,
    'zrevrangebyscore' : true,
    'zrevrank'         : true,
    'zscore'           : true,
    'zunionstore'      : true
    }

    return {
    focus : focus,
    init  : init
    }
})();

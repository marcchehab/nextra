enum LogLevels {
    DEBUG3, // VVV
    DEBUG2, // VV
    DEBUG,
    INFO,
    WARNING,
    ERROR
}
let LOG_LEVEL = LogLevels.DEBUG; // default value

if (typeof process.env.NEXT_PUBLIC_LOG_LEVEL !== 'undefined') {
    LOG_LEVEL = LogLevels[process.env.NEXT_PUBLIC_LOG_LEVEL as keyof typeof LogLevels];
}

type LogLevelString =
    | 'DEBUG3'
    | 'DEBUG2'
    | 'DEBUG'
    | 'INFO'
    | 'WARNING'
    | 'ERROR'

export default function log(level: LogLevelString, ...messages) {
    if (LogLevels[level] < LOG_LEVEL) {
        return
    }
    if (LogLevels[level] == LogLevels.ERROR) {
        console.error(`${level}:`, ...messages)
        return
    }
    console.log(`${level}:`, ...messages)
}

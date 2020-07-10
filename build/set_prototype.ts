interface String {
    format(...replacements: string[]): string;
}
if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match:any, number:any) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match;
        });
    };
}

// let b = '{0}:{1}'.format('ab', 'rr $15 h')
// console.log(b);

let wt:string[] = []
let text = '1231231'


var str = '%{datefmt} - %{user} - %{levelname} : %{message}'
var regexp = /%{([^\{\}]+)}/gi
var matches_array:any = str.match(regexp)

for (let value of matches_array) {
  if (value == "%{datefmt}") {
    wt.push('this.get_fmtdate()')
  } else if (value == "%{user}") {
    wt.push('this.user')
  } else if (value == "%{levelname}") {
    wt.push('CRITICAL')
  } else if (value == "%{message}") {
    wt.push(text)
  }
}

console.log(wt);

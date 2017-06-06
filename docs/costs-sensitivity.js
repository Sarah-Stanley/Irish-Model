var configurations = [
        {id: '1011111111111110111111001111100111101101101110110111', description: 'All at level 1'},
        {id: '2022222222222220222222002222200222202202202220220222', description: 'All at level 2'},
        {id: '3033333333333330333333003333300333303303303330330333', description: 'All at level 3'},
        {id: '4044444444444440444444004444400444404404404440440444', description: 'All at level 4'},
        {id: '1011111111111110111111004424400444404204304440420111', description: 'Maximum demand, no supply'},
        {id: '4044444444444440443424001121100111101102101110110111', description: 'Maximum supply, no demand'},
        {id: 'e0d3jrg21cci2110222112004423200444404202304440420141', description: 'Higher renewables, more energy efficiency'},
        {id: '1022212333222320433313003213300332303103303230310231', description: '20% emissions target, sample 1'},
        {id: '3031222222222220324313004414400334303102303320310231', description: '20% emissions target, sample 2'},
        {id: '1041332232322230212224003313400444404102304330410441', description:'20% emissions target, sample 3'}
]

var start = '<li><a href=\"#\" onclick=\"twentyfifty.switchComparator(\'';
var middle = '\');$(\'ul#view_comparatorchoice\').toggle(); return false;\">'
var end = '</a></li>\\n  ';

console.log(middle);

var str = '';
configurations.forEach(function(obj){
  str += start + obj.id + middle + obj.description + end;
});

console.log(str);
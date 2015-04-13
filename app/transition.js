export default function(){
  this.transition(
    this.fromRoute('people'),
    this.toRoute('groups'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}

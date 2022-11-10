import Component from '@glimmer/component';
import { action } from '@ember/object';
import './../react-web-components/FancyButtonWC';

export default class HeaderComponent extends Component {
  isLarge = false;

  @action
  randomFunction() {
    console.log('Called Parent Framework Function : Ember');
  }

}

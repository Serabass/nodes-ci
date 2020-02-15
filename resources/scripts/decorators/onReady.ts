import $ from 'jquery';

export function onReady(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  $(descriptor.value.bind(target));
}

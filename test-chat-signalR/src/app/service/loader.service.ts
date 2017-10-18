import {
    ComponentFactoryResolver,
    Injectable,
    Inject,
    ReflectiveInjector
} from '@angular/core'
import { MessageItemComponent } from '../chat/message/message-item.component'

@Injectable()
export class LoaderService {

    constructor(private factoryResolver: ComponentFactoryResolver) { }

    rootViewContainer : any;

    public setRootViewContainerRef(viewContainerRef: any) {
        this.rootViewContainer = viewContainerRef
    }

    public addDynamicComponent(name : string, message: string) {
        const factory = this.factoryResolver.resolveComponentFactory(MessageItemComponent)

        const component = factory.create(this.rootViewContainer.parentInjector)
        component.instance.message = message;
        component.instance.name = name;

        this.rootViewContainer.insert(component.hostView)
    }
}
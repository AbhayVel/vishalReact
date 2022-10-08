class TopicService {
	getAll() {
		 
		return "I am in get All";
	}
}


function TopicDataService(topicService) {

	this.getAll=function () {
		return topicService.getAll();
	}
}

function TopicDataService2(topicService) {

	this.getAll = function () {
		return "I am in 2";
	}
}

const useServiceFactory=(function (Provider) {
	const createInstance = {

	}

	function createObject(type, args) {
		return new (type.bind.apply(type, [null, ...args]));
	}

	function useService(type) {
		if (createInstance[type.name]) {
			return createInstance[type.name];
		}

		const index = Provider.findIndex((p) => {
			return p.provide.name === type.name;
		});
		const provider = Provider[index];

		var args = [];
		if (provider.dependency) {
			const dependency = provider.dependency;
			for (let i = 0; i < dependency.length; i++) {
				var objD = useService(dependency[i]);
				args.push(objD);
			}
		}
		if (provider.useClass) {

			var objUseClass = useService(provider.useClass);
			createInstance[type.name] = objUseClass;
		} else if (provider.useValue) {
			createInstance[type.name] = provider.useValue;
		} else if (provider.useFactory) {
			createInstance[type.name] = provider.useFactory();
		}
		else {
			const obj = createObject(provider.provide, args)
			createInstance[type.name] = obj;
		}

		return createInstance[type.name];
	}

	return useService;
})




var Provider = [

	{
		provide: TopicDataService, dependency: [TopicService], useFactory: () => {
			return new TopicDataService2();
		}		},
	
	{ provide: TopicService },
	 
]

class Consumer {
	get() {
		const obj = useService(TopicDataService);
		console.log(obj.getAll())
		 
		const obj2 = useService(TopicService);
		console.log(obj2.getAll())
		console.log(obj2 == obj);
		const obj3 = useService(TopicService);
		console.log(obj3.getAll())
	}
}

const useService = useServiceFactory(Provider);

var objConsumer = new Consumer();

objConsumer.get();
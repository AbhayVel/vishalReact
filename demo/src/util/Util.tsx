

export const getValue = (masterData: Array<any>, keyName: string, valueName: string, value: any, defaultValue: any = ""): any => {

	const index = masterData.findIndex((e: any) => {
		return e[keyName] === value;
	})

	if (index > -1) {
		return masterData[index][valueName];
	}

	return "";

}



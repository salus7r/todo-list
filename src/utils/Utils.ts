import { notification } from "antd";

class Utils {
	public openNotification = (type: string, message: string, description: string) => {
		notification[type]({
			placement: "bottomLeft",
			message: message,
			description: description,
			duration: 3
		});
	};

	public openApiErrorNotification = () => {
		notification.destroy();
		this.openNotification("error", "Api Error", "Something went wrong on server side");
	};
}

export default new Utils();

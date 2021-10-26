
export interface INotification {
	id: string;
	image?: string;
	type?: string;
	title: string;
	artist: string;
	content?: string;
	description?: string;
	period?: string;
	read: boolean;
	creation_date: string;

}

let notifications: INotification[] = [
	{
		"id": "61767750421de6628900dc83",
		"image": "http://placehold.it/32x32",
		"title": "lorem ipsum",
		"artist": "lorem",
		"type": "mise à jour",
		"content": "playlist",
		"description": "Quis mollit aliqua qui nisi.",
		"period": "Mon Oct 24 2021 11:22:24 GMT+0200 (CEST)",
		"creation_date": "Mon Oct 24 2021 11:22:24 GMT+0200 (CEST)",
		"read": false,
	},
	{
		"id": "617677500e8d36c1caf0cf0f",
		"image": "http://placehold.it/32x32",
		"type": "mise à jour",
		"title": "lorem ipsum",
		"artist": "lorem",
		"content": "podcast",
		"description": "Quis qui magna consequat reprehenderit.",
		"period": "Mon Oct 10 2021 11:22:24 GMT+0200 (CEST)",
		"creation_date": "Mon Oct 10 2021 11:22:24 GMT+0200 (CEST)",
		"read": false,
	},
	{
		"id": "61767750ac8ecfb8b0e02a85",
		"image": "http://placehold.it/32x32",
		"type": "recommandation",
		"title": "lorem ipsum",
		"artist": "lorem",
		"content": "track",
		"description": "Consectetur non sunt magna aliquip irure.",
		"period": "Mon Oct 5 2021 11:22:24 GMT+0200 (CEST)",
		"creation_date": "Mon Oct 5 2021 11:22:24 GMT+0200 (CEST)",
		"read": false,
	},
	{
		"id": "6176775095579b6c2245ed1f",
		"image": "http://placehold.it/32x32",
		"type": "recommandation",
		"title": "lorem ipsum",
		"artist": "lorem",
		"content": "playlist",
		"description": "Tempor sint exercitation nostrud anim.",
		"period": "Mon Oct 11 2021 11:22:24 GMT+0200 (CEST)",
		"creation_date": "Mon Oct 11 2021 11:22:24 GMT+0200 (CEST)",
		"read": false,
	},
	{
		"id": "61767750ecc614208816f542",
		"image": "http://placehold.it/32x32",
		"type": "nouveauté",
		"title": "lorem ipsum",
		"artist": "lorem",
		"content": "album",
		"description": "Sit sit sint cillum fugiat nisi occaecat.",
		"period": "Mon Oct 25 2021 11:22:24 GMT+0200 (CEST)",
		"creation_date": "Mon Oct 25 2021 11:22:24 GMT+0200 (CEST)",
		"read": false,
	},
	{
		"id": "6176775098928267cd4df480",
		"image": "http://placehold.it/32x32",
		"type": "partage",
		"content": "playlist",
		"title": "lorem ipsum",
		"artist": "lorem",
		"description": "Enim velit culpa ut anim consequat voluptate.",
		"period": "Mon Oct 12 2021 11:22:24 GMT+0200 (CEST)",
		"creation_date": "Mon Oct 12 2021 11:22:24 GMT+0200 (CEST)",
		"read": false,
	},
	{
		"id": "61767750946fcd3b35e8474c",
		"image": "http://placehold.it/32x32",
		"type": "nouveauté",
		"content": "podcast",
		"title": "lorem ipsum",
		"artist": "lorem",
		"description": "Fugiat veniam irure reprehenderit in.",
		"period": "Mon Oct 14 2021 11:22:24 GMT+0200 (CEST)",
		"creation_date": "Mon Oct 14 2021 11:22:24 GMT+0200 (CEST)",
		"read": false,
	},
	{
		"id": "617677503774350a17417a39",
		"image": "http://placehold.it/32x32",
		"type": "partage",
		"content": "podcast",
		"title": "lorem ipsum",
		"artist": "lorem",
		"description": "Sint id ipsum dolore et ea et tempor.",
		"period": "Mon Oct 18 2021 11:22:24 GMT+0200 (CEST)",
		"creation_date": "Mon Oct 18 2021 11:22:24 GMT+0200 (CEST)",
		"read": false,
	}
]
export const getNotifications = (): Promise<unknown> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(notifications)
		}, 1000);
	});
}

export const markNotificationAsRead = (id: string): Promise<unknown> => {
	notifications = notifications.map(notification => {
		return {
			...notification,
			read: id === notification.id ? true : notification.read
		}
	})
	return new Promise(resolve => {
		resolve(notifications)
	})
}

export const clearNotifications = (): Promise<unknown> => {
	notifications = []
	return new Promise((resolve) => {
		resolve([])
	})
}

export interface INotification {
	id: string;
	image?: string;
	type?: string;
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
		"type": "mise à jour",
		"content": "playlist",
		"description": "Quis mollit aliqua qui nisi aliquip irure dolor ex.",
		"period": "2020-02-29T12:48:58 -01:00",
		"creation_date": "Mon Oct 24 2021 11:22:24 GMT+0200 (CEST)",
		"read": false,
	},
	{
		"id": "617677500e8d36c1caf0cf0f",
		"image": "http://placehold.it/32x32",
		"type": "mise à jour",
		"content": "podcast",
		"description": "Quis qui magna consequat reprehenderit exercitation incididunt enim voluptate.",
		"period": "2018-06-15T09:48:16 -02:00",
		"creation_date": "Mon Oct 10 2021 11:22:24 GMT+0200 (CEST)",
		"read": false,
	},
	{
		"id": "61767750ac8ecfb8b0e02a85",
		"image": "http://placehold.it/32x32",
		"type": "recommandation",
		"content": "track",
		"description": "Consectetur non sunt magna aliquip irure est esse amet non.",
		"period": "2019-01-14T11:25:12 -01:00",
		"creation_date": "Mon Oct 5 2021 11:22:24 GMT+0200 (CEST)",
		"read": false,
	},
	{
		"id": "6176775095579b6c2245ed1f",
		"image": "http://placehold.it/32x32",
		"type": "recommandation",
		"content": "playlist",
		"description": "Tempor sint exercitation nostrud anim laborum exercitation nulla proident dolor tempor proident.",
		"period": "2014-03-14T01:05:19 -01:00",
		"creation_date": "Mon Oct 11 2021 11:22:24 GMT+0200 (CEST)",
		"read": true,
	},
	{
		"id": "61767750ecc614208816f542",
		"image": "http://placehold.it/32x32",
		"type": "nouveauté",
		"content": "album",
		"description": "Sit sit sint cillum fugiat nisi occaecat amet nisi cillum.",
		"period": "2016-12-19T11:02:04 -01:00",
		"creation_date": "Mon Oct 25 2021 11:22:24 GMT+0200 (CEST)",
		"read": false,
	},
	{
		"id": "6176775098928267cd4df480",
		"image": "http://placehold.it/32x32",
		"type": "partage",
		"content": "playlist",
		"description": "Enim velit culpa ut anim consequat voluptate mollit qui officia aute ad ipsum.",
		"period": "2019-11-23T10:13:58 -01:00",
		"creation_date": "Mon Oct 12 2021 11:22:24 GMT+0200 (CEST)",
		"read": false,
	},
	{
		"id": "61767750946fcd3b35e8474c",
		"image": "http://placehold.it/32x32",
		"type": "nouveauté",
		"content": "podcast",
		"description": "Fugiat veniam irure reprehenderit in.",
		"period": "2020-04-25T07:13:27 -02:00",
		"creation_date": "Mon Oct 14 2021 11:22:24 GMT+0200 (CEST)",
		"read": true,
	},
	{
		"id": "617677503774350a17417a39",
		"image": "http://placehold.it/32x32",
		"type": "partage",
		"content": "podcast",
		"description": "Sint id ipsum dolore et ea et tempor aliquip laborum deserunt.",
		"period": "2017-01-19T06:08:40 -01:00",
		"creation_date": "Mon Oct 18 2021 11:22:24 GMT+0200 (CEST)",
		"read": false,
	}
]
export const getNotifications = (): Promise<unknown> => {
	return new Promise((resolve) => {
		resolve(notifications)
	});
}

export const markNotificationAsRead = (id: string) => {
	return notifications.map(notification => {
		return {
			...notification,
			read: id === notification.id ? true : notification.read
		}
	})
}
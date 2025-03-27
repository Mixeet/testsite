const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.GamePush_Channels,
		C3.Plugins.TextBox,
		C3.Plugins.Button,
		C3.Plugins.Text,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSync
	];
};
self.C3_JsPropNameTable = [
	{GamePush: 0},
	{GamePushChannels: 0},
	{ВводТекста: 0},
	{ВводТекста2: 0},
	{Кнопка: 0},
	{Текст: 0}
];

self.InstanceType = {
	GamePush: class extends self.IInstance {},
	GamePushChannels: class extends self.IInstance {},
	ВводТекста: class extends self.ITextInputInstance {},
	ВводТекста2: class extends self.ITextInputInstance {},
	Кнопка: class extends self.IButtonInstance {},
	Текст: class extends self.ITextInstance {}
}
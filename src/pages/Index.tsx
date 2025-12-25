import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const mods = [
    {
      id: 1,
      name: 'OptiFine',
      category: 'Оптимизация',
      description: 'Улучшает производительность и добавляет HD текстуры',
      downloads: '50M+',
      version: '1.20.4',
      icon: '⚡'
    },
    {
      id: 2,
      name: 'Just Enough Items',
      category: 'Утилиты',
      description: 'Показывает все рецепты крафта в игре',
      downloads: '100M+',
      version: '1.20.4',
      icon: '📦'
    },
    {
      id: 3,
      name: 'Biomes O Plenty',
      category: 'Биомы',
      description: 'Добавляет 90+ новых биомов в игру',
      downloads: '75M+',
      version: '1.20.4',
      icon: '🌲'
    },
    {
      id: 4,
      name: 'Applied Energistics',
      category: 'Технологии',
      description: 'Система автоматизации и хранения предметов',
      downloads: '45M+',
      version: '1.20.4',
      icon: '🔧'
    },
    {
      id: 5,
      name: 'Tinkers Construct',
      category: 'Инструменты',
      description: 'Создание кастомных инструментов и оружия',
      downloads: '80M+',
      version: '1.20.4',
      icon: '⚒️'
    },
    {
      id: 6,
      name: 'The Twilight Forest',
      category: 'Приключения',
      description: 'Новое измерение с боссами и данжами',
      downloads: '60M+',
      version: '1.20.4',
      icon: '🌙'
    }
  ];

  const texturePacks = [
    {
      id: 1,
      name: 'Faithful 32x',
      resolution: '32x32',
      description: 'Улучшенная версия стандартных текстур',
      downloads: '30M+',
      icon: '🎨'
    },
    {
      id: 2,
      name: 'Sphax PureBDcraft',
      resolution: '128x128',
      description: 'Комиксный стиль с яркими цветами',
      downloads: '25M+',
      icon: '🖼️'
    },
    {
      id: 3,
      name: 'Mizuno\'s 16 Craft',
      resolution: '16x16',
      description: 'Реалистичные текстуры в ванильном разрешении',
      downloads: '20M+',
      icon: '🎭'
    },
    {
      id: 4,
      name: 'John Smith Legacy',
      resolution: '32x32',
      description: 'Средневековый стиль текстур',
      downloads: '15M+',
      icon: '🏰'
    }
  ];

  const addons = [
    {
      id: 1,
      name: 'WorldEdit',
      type: 'Плагин',
      description: 'Редактор карт для создателей',
      downloads: '40M+',
      icon: '🗺️'
    },
    {
      id: 2,
      name: 'SkyBlock Map',
      type: 'Карта',
      description: 'Классическая карта выживания на острове',
      downloads: '35M+',
      icon: '🏝️'
    },
    {
      id: 3,
      name: 'EssentialsX',
      type: 'Плагин',
      description: 'Основные команды для сервера',
      downloads: '50M+',
      icon: '⚙️'
    },
    {
      id: 4,
      name: 'The Dropper',
      type: 'Карта',
      description: 'Паркур карта с падениями',
      downloads: '28M+',
      icon: '🎯'
    }
  ];

  const filteredMods = mods.filter(mod =>
    mod.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-green-200 to-green-400">
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 16px),
                             repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 16px)`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 animate-float">
              <div className="text-8xl">⛏️</div>
            </div>
            <h1 className="text-6xl font-bold mb-4 pixel-shadow" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
              Minecraft Моды & Текстуры
            </h1>
            <p className="text-xl mb-8 text-green-50">
              Скачивай лучшие моды, текстур-паки и дополнения для своего мира
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold pixel-shadow hover-lift">
                <Icon name="Download" className="mr-2" />
                Скачать моды
              </Button>
              <Button size="lg" variant="outline" className="bg-white/90 hover:bg-white text-green-700 font-bold pixel-shadow hover-lift border-2 border-green-700">
                <Icon name="Sparkles" className="mr-2" />
                Популярное
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="text"
              placeholder="Поиск модов, текстур и дополнений..."
              className="pl-12 py-6 text-lg border-4 border-green-700 focus:border-yellow-500 pixel-shadow"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="mods" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8 bg-white border-4 border-green-700 pixel-shadow h-auto">
            <TabsTrigger value="mods" className="text-lg py-3 font-semibold data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <Icon name="Package" className="mr-2" />
              Моды
            </TabsTrigger>
            <TabsTrigger value="textures" className="text-lg py-3 font-semibold data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <Icon name="Palette" className="mr-2" />
              Текстуры
            </TabsTrigger>
            <TabsTrigger value="addons" className="text-lg py-3 font-semibold data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <Icon name="Puzzle" className="mr-2" />
              Дополнения
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mods" className="animate-slide-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMods.map((mod) => (
                <Card key={mod.id} className="border-4 border-green-700 pixel-shadow hover-lift bg-white overflow-hidden group">
                  <CardHeader className="bg-gradient-to-br from-green-100 to-emerald-100 border-b-4 border-green-700">
                    <div className="flex items-start justify-between">
                      <div className="text-5xl mb-2 animate-pixel-pulse">{mod.icon}</div>
                      <Badge className="bg-yellow-500 text-gray-900 font-bold border-2 border-yellow-600">
                        {mod.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold text-green-900">{mod.name}</CardTitle>
                    <CardDescription className="text-base text-gray-700 font-medium">
                      {mod.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-center text-sm mb-4">
                      <div className="flex items-center gap-1 text-gray-600 font-semibold">
                        <Icon name="Download" size={16} />
                        <span>{mod.downloads}</span>
                      </div>
                      <Badge variant="outline" className="border-2 border-green-600 text-green-700 font-bold">
                        v{mod.version}
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-600 hover:bg-green-700 font-bold text-lg py-6 pixel-shadow">
                      <Icon name="Download" className="mr-2" />
                      Скачать
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="textures" className="animate-slide-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {texturePacks.map((pack) => (
                <Card key={pack.id} className="border-4 border-green-700 pixel-shadow hover-lift bg-white overflow-hidden">
                  <CardHeader className="bg-gradient-to-br from-purple-100 to-pink-100 border-b-4 border-green-700">
                    <div className="flex items-start justify-between">
                      <div className="text-5xl mb-2">{pack.icon}</div>
                      <Badge className="bg-purple-500 text-white font-bold border-2 border-purple-600">
                        {pack.resolution}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold text-green-900">{pack.name}</CardTitle>
                    <CardDescription className="text-base text-gray-700 font-medium">
                      {pack.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600 font-semibold">
                      <Icon name="Download" size={16} />
                      <span>{pack.downloads} скачиваний</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 font-bold text-lg py-6 pixel-shadow">
                      <Icon name="Download" className="mr-2" />
                      Скачать
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="addons" className="animate-slide-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addons.map((addon) => (
                <Card key={addon.id} className="border-4 border-green-700 pixel-shadow hover-lift bg-white overflow-hidden">
                  <CardHeader className="bg-gradient-to-br from-orange-100 to-yellow-100 border-b-4 border-green-700">
                    <div className="flex items-start justify-between">
                      <div className="text-5xl mb-2">{addon.icon}</div>
                      <Badge className="bg-orange-500 text-white font-bold border-2 border-orange-600">
                        {addon.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold text-green-900">{addon.name}</CardTitle>
                    <CardDescription className="text-base text-gray-700 font-medium">
                      {addon.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600 font-semibold">
                      <Icon name="Download" size={16} />
                      <span>{addon.downloads} скачиваний</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 font-bold text-lg py-6 pixel-shadow">
                      <Icon name="Download" className="mr-2" />
                      Скачать
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-green-800 text-white py-12 mt-16 border-t-4 border-green-900">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🎮</div>
          <h3 className="text-3xl font-bold mb-4">Готов улучшить свой Minecraft?</h3>
          <p className="text-xl mb-6 text-green-100">
            Присоединяйся к миллионам игроков, которые уже скачали моды!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg px-8 pixel-shadow">
              <Icon name="Rocket" className="mr-2" />
              Начать сейчас
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

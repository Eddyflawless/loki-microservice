import { Injectable } from '@nestjs/common';

type Ninja = { name: string; id?: number };
@Injectable()
export class AppService {
  private ninjas: Ninja[] = [
    { id: 12, name: 'Ninjas 12' },
    { id: 13, name: 'Ninjas 13' },
    { id: 14, name: 'Ninjas 14' },
    { id: 15, name: 'Ninjas 15' },
  ];

  getHello(): string {
    return 'Hello World! 22';
  }

  getNinjas(): Ninja[] {
    return this.ninjas;
  }

  getNinjaById(id: number): Ninja {
    return this.ninjas.find((ninja) => ninja.id === id);
  }

  createNinja(ninja: Pick<Ninja, 'name'>): Ninja {
    const id = this.ninjas.length + 1;
    const record = { id, ...ninja };
    this.ninjas.push(record);
    return record;
  }
}

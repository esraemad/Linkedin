import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorktypesService {
  worktypes=[
    { type: "Full Time", id: 1 },
    { type: "Part Time", id: 2 },
    { type: "Freelance", id: 3 }
  ]
  constructor() { }
  getAll() {
    return this.worktypes;

}
}

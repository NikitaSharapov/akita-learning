export interface DiskWithId {
  id: number;
  association_id: number;
  bootable: boolean;
  enabled: boolean;
  name: string;
  priority: number;
  device_id: string;
  size: string;
  dd_id: number;
  extent_id: number;
}

export interface DisksWithId {
  data: DiskWithId[];
}

export function createDisksWithId(_params: Partial<DisksWithId>) {
  return {
    data:[]
  } as DisksWithId;
}

export function createDiskWithId(_params: Partial<DiskWithId>) {
  return {
    id: 0,
    association_id: 0,
    bootable: false,
    enabled: false,
    name: '',
    priority: 0,
    device_id: '',
    size: '',
    dd_id: 0,
    extent_id: 0,
  } as DiskWithId;
}
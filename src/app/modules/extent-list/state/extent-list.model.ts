export interface Extent {
  id: number;
  name: string;
  serial: string;
  type: string;
  path: string;
  filesize: string;
  pblocksize: boolean;
  avail_threshold: number;
  comment: string;
  naa: string;
  xen: boolean;
  rpm: string;
  ro: boolean;
  enabled: boolean;
  vendor: string;
  disk: string;
  locked: boolean;
}

export interface ExtentList {
  data: Extent[];
}

export function createExtentList(_params: Partial<ExtentList>) {
  return {
    data:[]
  } as ExtentList;
}

export function createExtent(_params: Partial<Extent>) {
  return {
    id: 0,
    name: '',
    serial: '',
    type: '',
    path: '',
    filesize: '',
    pblocksize: false,
    avail_threshold: 0,
    comment: '',
    naa: '',
    xen: false,
    rpm: '',
    ro: false,
    enabled: false,
    vendor: '',
    disk: '',
    locked: false,
  } as Extent;
}
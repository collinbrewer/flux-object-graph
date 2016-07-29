import FluxObjectGraph from '../src/flux-object-graph.js'

describe('FluxObjectGraph', () => {

   context('#constructor', () => {
      it('should create a new instance', () => {
         let fluxObjectGraph = new FluxObjectGraph();

         expect(fluxObjectGraph).to.exist;
      });
   });

   context('#connect', () => {
      it('should register a listener');
      it('should trigger a fetch');
   });

   context('#disconnect', () => {
      it('should unregister a listener');
   });
});

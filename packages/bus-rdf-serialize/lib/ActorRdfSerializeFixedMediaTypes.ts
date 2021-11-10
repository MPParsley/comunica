/* eslint-disable max-len */
import type { IActorArgsMediaTypedFixed } from '@comunica/actor-abstract-mediatyped';
import { ActorAbstractMediaTypedFixed } from '@comunica/actor-abstract-mediatyped';
import type { IActorTest } from '@comunica/core';
import type { IActionRdfSerialize, IActorRdfSerializeOutput,
  ActorRdfSerialize } from './ActorRdfSerialize';

/**
 * A base actor for listening to RDF serialize events that has fixed media types.
 *
 * Actor types:
 * * Input:  IActionRdfSerializeOrMediaType:      A serialize input or a media type input.
 * * Test:   <none>
 * * Output: IActorRdfSerializeOutputOrMediaType: The serialized quads.
 *
 * @see IActionInit
 */
export abstract class ActorRdfSerializeFixedMediaTypes extends ActorAbstractMediaTypedFixed<
IActionRdfSerialize, IActorTest, IActorRdfSerializeOutput>
  implements IActorRdfSerializeFixedMediaTypesArgs, ActorRdfSerialize {
  /**
   * TODO: rm this (and eslint-disable) once we remove the abstract media typed actor
   * @param args - @defaultNested {<cbrs:lib/ActorRdfSerialize#ActorRdfSerialize_default_bus> a <cc:lib/Bus#Bus>} bus
   */
  public constructor(args: IActorRdfSerializeFixedMediaTypesArgs) {
    super(args);
  }

  public async testHandleChecked(action: IActionRdfSerialize): Promise<boolean> {
    return true;
  }
}

export interface IActorRdfSerializeFixedMediaTypesArgs
  extends IActorArgsMediaTypedFixed<IActionRdfSerialize, IActorTest, IActorRdfSerializeOutput> {}
